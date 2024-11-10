package com.swpproject.koi_care_system.service.profile;

import com.swpproject.koi_care_system.dto.UserProfileDto;
import com.swpproject.koi_care_system.enums.ErrorCode;
import com.swpproject.koi_care_system.exceptions.AppException;
import com.swpproject.koi_care_system.mapper.UserProfileMapper;
import com.swpproject.koi_care_system.models.User;
import com.swpproject.koi_care_system.models.UserProfile;
import com.swpproject.koi_care_system.payload.request.ProfileUpdateRequest;
import com.swpproject.koi_care_system.repository.UserProfileRepository;
import com.swpproject.koi_care_system.service.imageBlobStorage.ImageStorage;
import com.swpproject.koi_care_system.service.subscribe.ISubscribePlanService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ProfileService implements IProfileService {
    UserProfileMapper userProfileMapper;
    UserProfileRepository userProfileRepository;
    ISubscribePlanService subscribePlanService;
    ImageStorage imageStorage;

    @Override
    public UserProfile createProfile(User user) {
        UserProfile userProfile = userProfileMapper.mapToUserProfile(user);
        userProfile.setCreatedDate(LocalDate.now());
        userProfileRepository.save(userProfile);
        userProfile.setSubscribePlan(subscribePlanService.initDefault(user.getId()));
        userProfile.setAvatar("https://koicareimage.blob.core.windows.net/koicarestorage/defaultProfile.jpg");
        return userProfileRepository.save(userProfile);
    }

    @Override
    @PostAuthorize("returnObject.name == authentication.name")
    public UserProfileDto updateProfile(Long userId, ProfileUpdateRequest profileUpdateRequest) {
        UserProfile userProfile = userProfileRepository.findByUserId(userId).orElseThrow(() -> new AppException(ErrorCode.PROFILE_NOT_FOUND));
        if (profileUpdateRequest.getFile() != null) {
            if (!profileUpdateRequest.getFile().isEmpty()) {
                try {
                    if (!userProfile.getAvatar().equals("https://koicareimage.blob.core.windows.net/koicarestorage/defaultProfile.jpg"))
                        imageStorage.deleteImage(userProfile.getAvatar());
                    userProfile.setAvatar(imageStorage.uploadImage(profileUpdateRequest.getFile()));
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        }
        userProfileMapper.updateUserProfile(userProfile, profileUpdateRequest);
        return userProfileMapper.mapToUserProfileDto(userProfileRepository.save(userProfile));
    }

    @Override
    @PostAuthorize("returnObject.name == authentication.name")
    public UserProfileDto getProfile(Long userId) {
        UserProfile userProfile = userProfileRepository.findByUserId(userId).orElseThrow(() -> new AppException(ErrorCode.PROFILE_NOT_FOUND));
        return userProfileMapper.mapToUserProfileDto(userProfile);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN') or hasRole('SHOP')")
    public List<UserProfileDto> getAllProfile() {
        return userProfileRepository.findAll().stream().map(userProfileMapper::mapToUserProfileDto).toList();
    }

    @Override
    public UserProfile createProfileOauth(User user, String imageUrl) {
        UserProfile userProfile = userProfileMapper.mapToUserProfile(user);
        userProfile.setCreatedDate(LocalDate.now());
        userProfileRepository.save(userProfile);
        userProfile.setSubscribePlan(subscribePlanService.initDefault(user.getId()));
        userProfile.setAvatar(imageUrl);
        return userProfileRepository.save(userProfile);
    }
}
