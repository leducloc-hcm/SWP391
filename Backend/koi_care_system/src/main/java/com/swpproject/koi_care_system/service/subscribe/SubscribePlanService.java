package com.swpproject.koi_care_system.service.subscribe;

import com.swpproject.koi_care_system.dto.SubscribePlanDto;
import com.swpproject.koi_care_system.dto.UserProfileDto;
import com.swpproject.koi_care_system.enums.ProfileStatus;
import com.swpproject.koi_care_system.mapper.SubscribeMapper;
import com.swpproject.koi_care_system.mapper.UserProfileMapper;
import com.swpproject.koi_care_system.models.Order;
import com.swpproject.koi_care_system.models.Product;
import com.swpproject.koi_care_system.models.SubscribePlan;
import com.swpproject.koi_care_system.models.UserProfile;
import com.swpproject.koi_care_system.payload.request.UpgradePremiumRequest;
import com.swpproject.koi_care_system.repository.ProductRepository;
import com.swpproject.koi_care_system.repository.SubscribePlanRepository;
import com.swpproject.koi_care_system.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SubscribePlanService implements ISubscribePlanService{
    private final UserProfileRepository userProfileRepository;
    private final SubscribePlanRepository subscribePlanRepository;
    private final SubscribeMapper subscribeMapper;
    private final UserProfileMapper userProfileMapper;
    @Override
    public SubscribePlan initDefault(Long userId) {
        SubscribePlan subscribePlan = new SubscribePlan();
        subscribePlan.setSubscribe(ProfileStatus.NORMAL);
        subscribePlan.setStartDate(LocalDate.now());
        subscribePlan.setExpiredDate(subscribePlan.getStartDate().plusYears(10));
        subscribePlan.setUserProfile(userProfileRepository.findUserProfileByUserId(userId));
        return subscribePlanRepository.save(subscribePlan);
    }

    @Override
    public String upgradePremium(UpgradePremiumRequest request) {
        SubscribePlan subscribePlan= subscribePlanRepository.findSubscribePlanByUserProfileId(request.getUserProfileId());
        subscribePlan.setStartDate(LocalDate.now());
        subscribePlan.setSubscribe(ProfileStatus.PREMIUM);
        switch (request.getTime()) {
            case "1MONTH" -> subscribePlan.setExpiredDate(subscribePlan.getStartDate().plusMonths(1));
            case "6MONTHS" -> subscribePlan.setExpiredDate(subscribePlan.getStartDate().plusMonths(6));
            case "12MONTHS" -> subscribePlan.setExpiredDate(subscribePlan.getStartDate().plusMonths(12));
        }
        subscribePlanRepository.save(subscribePlan);
        return "Upgraded successful";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public List<SubscribePlanDto> getAllCustomer() {
        List<SubscribePlan> subscribePlans = subscribePlanRepository.findAll();
        return subscribePlans.stream()
                .map(subscribePlan -> {
                    UserProfileDto userProfileDto = userProfileMapper.mapToUserProfileDto(subscribePlan.getUserProfile());
                    SubscribePlanDto mappedSubscribePlan = subscribeMapper.maptoDto(subscribePlan);
                    mappedSubscribePlan.setUserProfileDto(userProfileDto);
                    return mappedSubscribePlan;
                })
                .collect(Collectors.toList());
    }

    @Override
    public void upgradePremiumAuto(Order order){
        Long userProfileId = userProfileRepository.findUserProfileByUserId(order.getUser().getId()).getId();
        order.getOrderItems().forEach(orderItem -> {
            switch (orderItem.getProduct().getName()){
                case "Premium 1 Months" -> upgradePremiumWithQuantity(userProfileId,"1MONTH", (long) orderItem.getQuantity());
                case "Premium 6 Months" -> upgradePremiumWithQuantity(userProfileId,"6MONTHS", (long) orderItem.getQuantity());
                case "Premium 1 Year" -> upgradePremiumWithQuantity(userProfileId,"12MONTHS", (long) orderItem.getQuantity());
            }
        });
    }

    private void upgradePremiumWithQuantity(Long userProfileId, String time, Long quantity){
        SubscribePlan subscribePlan= subscribePlanRepository.findSubscribePlanByUserProfileId(userProfileId);
        if(subscribePlan.getSubscribe().equals(ProfileStatus.NORMAL)){
            subscribePlan.setStartDate(LocalDate.now());
            subscribePlan.setSubscribe(ProfileStatus.PREMIUM);
        }
        switch (time) {
            case "1MONTH" -> subscribePlan.setExpiredDate(subscribePlan.getStartDate().plusMonths(quantity));
            case "6MONTHS" -> subscribePlan.setExpiredDate(subscribePlan.getStartDate().plusMonths(6*quantity));
            case "12MONTHS" -> subscribePlan.setExpiredDate(subscribePlan.getStartDate().plusMonths(12*quantity));
        }
    }

    public void resetDefault(Long userProfileId){
        SubscribePlan subscribePlan= subscribePlanRepository.findSubscribePlanByUserProfileId(userProfileId);
        subscribePlan.setSubscribe(ProfileStatus.NORMAL);
        subscribePlan.setExpiredDate(LocalDate.MAX);
        subscribePlanRepository.save(subscribePlan);
    }
}
