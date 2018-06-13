package com.elkdev.tripPlanner.user.model;

import com.elkdev.tripPlanner.security.model.UserRole;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String lastname;
    private String mail;
    private String username;
    private String password;
    private Boolean enabled;
    private UserRole userRole;

}
