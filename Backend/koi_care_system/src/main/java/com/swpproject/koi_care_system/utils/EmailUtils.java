package com.swpproject.koi_care_system.utils;

public class EmailUtils {
    public static String getVerificationUrl(String email, String token) {
        return "https://koicaresystemv2.azurewebsites.net/api/auth/verifyEmail?email=" + email + "&token=" + token + "&redirect=https://koi-care-system.vercel.app/verify";
    }
}
