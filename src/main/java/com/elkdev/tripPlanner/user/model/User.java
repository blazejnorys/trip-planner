package com.elkdev.tripPlanner.user.model;

import com.elkdev.tripPlanner.country.model.Country;
import com.elkdev.tripPlanner.security.model.UserRole;
import com.elkdev.tripPlanner.trip.model.Trip;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String lastname;
    private String mail;
    private String username;
    private String password;
    private Boolean enabled;
    private UserRole userRole;
    @ManyToMany
    private List<Country> userCountries;
    @OneToMany
    private List<Trip> userTrips;

}
