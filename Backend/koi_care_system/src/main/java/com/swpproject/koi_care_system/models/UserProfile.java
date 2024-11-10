package com.swpproject.koi_care_system.models;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String name;
    String email;
    String phone;
    String address;
    String gender;
    String avatar;
    String bio;
    LocalDate dateOfBirth;
    LocalDate createdDate;

    @OneToOne(mappedBy = "userProfile", cascade = CascadeType.ALL, orphanRemoval = true)
    SubscribePlan subscribePlan;

    String role;

    @OneToOne
    @JoinColumn(name = "user_id")
    User user;
}
