package com.swpproject.koi_care_system.service.promotion;

import com.swpproject.koi_care_system.dto.ProductDto;
import com.swpproject.koi_care_system.dto.PromotionDto;
import com.swpproject.koi_care_system.enums.PromotionStatus;
import com.swpproject.koi_care_system.exceptions.AlreadyExistsException;
import com.swpproject.koi_care_system.exceptions.ResourceNotFoundException;
import com.swpproject.koi_care_system.mapper.ProductMapper;
import com.swpproject.koi_care_system.mapper.PromotionMapper;
import com.swpproject.koi_care_system.models.Product;
import com.swpproject.koi_care_system.models.Promotion;
import com.swpproject.koi_care_system.payload.request.AddPromotionRequest;
import com.swpproject.koi_care_system.payload.request.AdminConfirmPromotionRequest;
import com.swpproject.koi_care_system.payload.request.PromotionUpdateRequest;
import com.swpproject.koi_care_system.repository.ProductRepository;
import com.swpproject.koi_care_system.repository.PromotionRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PromotionService implements IPromotionService {

    private final PromotionRepository promotionRepository;
    private final PromotionMapper promotionMapper;
    private final ProductMapper productMapper;
    private final ProductRepository productRepository;
    @Override
    @PreAuthorize("hasRole('ADMIN') or hasRole('SHOP')")
    public PromotionDto createPromotion(AddPromotionRequest addPromotionRequest) {
        if(promotionRepository.existsByName(addPromotionRequest.getName())){
            throw new AlreadyExistsException("A Promotion with this name already exists");
        }
        Promotion promotion = promotionMapper.mapToPromotion(addPromotionRequest);
        Promotion savedPromotion = promotionRepository.save(promotion);
        this.addProductsToPromotion(savedPromotion.getId(),addPromotionRequest.getProductIds());
        return promotionMapper.mapToDto(promotion);

    }
    @Override
    @PreAuthorize("hasRole('ADMIN') or hasRole('SHOP')")
    public PromotionDto updatePromotion(Long id, PromotionUpdateRequest promotionUpdateRequest) {
        Promotion promotion = promotionRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("No promotion found with this id"));
        if(!promotion.getStatus().equals(PromotionStatus.PENDING))
            throw new RuntimeException("Promotion can't to edit when the status is processing");
        promotion.getProducts().forEach(product -> product.getPromotions().remove(promotion));
        promotion.getProducts().clear();
        promotionMapper.updatePromotion(promotion,promotionUpdateRequest);
        this.addProductsToPromotion(promotion.getId(),promotionUpdateRequest.getProductIds());
        return promotionMapper.mapToDto(promotionRepository.save(promotion));
    }
    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public PromotionDto verifyByAdmin(AdminConfirmPromotionRequest request) {
        Promotion promotion = promotionRepository.findById(request.getPromotionId())
                .orElseThrow(() -> new ResourceNotFoundException("Promotion not found with id: " + request.getPromotionId()));
        promotionMapper.confirmPromotion(promotion,request);
        return promotionMapper.mapToDto(promotionRepository.save(promotion));
    }
    @Override
    @PreAuthorize("hasRole('ADMIN') or hasRole('SHOP')")
    public void deletePromotion(Long id) {
        promotionRepository.findById(id).ifPresentOrElse(promotion -> {
            promotion.getProducts().forEach(product -> product.getPromotions().remove(promotion));
            promotion.getProducts().clear();
            promotionRepository.delete(promotion);
        },()->{
            throw new ResourceNotFoundException("No promotion found with this id");
        });
    }
    @Override
    public List<ProductDto> getAllProductByPromotionId(Long promotionId) {
        return promotionRepository.findPromotionById(promotionId).getProducts()
                .stream().map(productMapper::mapToProductDto).toList();
    }

    @Override
    public PromotionDto getPromotionById(Long id) {
        return promotionMapper.mapToDto(promotionRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("No promotion found with this id")));
    }

    @Override
    public List<PromotionDto> getAllPromotions() {
        return promotionRepository.findAll().stream().map(promotion ->{
            switch (promotion.getStatus()){
                case ACCEPTED -> {
                    if(promotion.getStartDate().isBefore(LocalDateTime.now())){
                        promotion.setStatus(PromotionStatus.PROCESSING);
                    }
                }
                case PROCESSING -> {
                    if(promotion.getEndDate().isBefore(LocalDateTime.now())){
                        promotion.setStatus(PromotionStatus.ENDED);
                    }
                }
            }
            promotionRepository.save(promotion);
            return promotionMapper.mapToDto(promotion);
        }).toList();
    }

    @Override
    public List<PromotionDto> getAllPromotionsRequest() {
        return promotionRepository.findPromotionByStatus(PromotionStatus.PENDING).stream().map(promotionMapper::mapToDto).toList();
    }

    private void addProductsToPromotion(Long promotionId, List<Long> productIds) {
        Promotion promotion = promotionRepository.findById(promotionId)
                .orElseThrow(() -> new ResourceNotFoundException("Promotion not found with id: " + promotionId));
        List<Product> products = productRepository.findAllById(productIds);
        for (Product product : products) {
            promotion.getProducts().add(product);
            product.getPromotions().add(promotion);
        }
        productRepository.saveAll(products);
        promotionRepository.save(promotion);
    }
    @Override
    public void upToDate(){
        this.getAllPromotions();
    }

}