package com.elkdev.tripPlanner.continent.model;

import com.elkdev.tripPlanner.country.model.Country;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity(name = "continents")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Continent {

    @Id
    private String cotinentCode;
    private String continentName;
    @OneToMany(mappedBy = "continentCode", fetch = FetchType.EAGER)
    private List<Country> countryList;
}
