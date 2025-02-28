package com.swpproject.koi_care_system.payload.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class GrowthCreateRequest {
    LocalDateTime createDate;
    String physique;
    @NotNull
    @Min(value = 0, message = "Length must be positive")
    Double length;
    @NotNull
    @Min(value = 0, message = "Weight must be positive")
    Double weight;
    MultipartFile file;
    @NotBlank
    Long koiFishId;
}