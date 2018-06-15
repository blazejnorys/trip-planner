package com.elkdev.tripPlanner.security.model;

import lombok.Getter;

public enum UserRole {
    ROLE_ADMIN("ROLE_ADMIN"),
    ROLE_USER("ROLE_USER");

    @Getter
    private final String kod;

    UserRole(String kod) {
        this.kod = kod;
    }


}
