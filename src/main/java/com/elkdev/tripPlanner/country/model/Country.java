package com.elkdev.tripPlanner.country.model;

import com.elkdev.tripPlanner.continent.model.Continent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name = "countries")
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String countryName;
    private String fullName;
    private String countryCode;
    //TODO do przemyślenia czy to w ogole tu jest potrzebne
    @ManyToOne
    @JoinColumn(name = "continent_code")
    private Continent continentCode;
    private String iso3;
    private Integer countryNumber;
    @Transient
    private String countryFlag;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }


    public String getIso3() {
        return iso3;
    }

    public void setIso3(String iso3) {
        this.iso3 = iso3;
    }

    public Integer getCountryNumber() {
        return countryNumber;
    }

    public void setCountryNumber(Integer countryNumber) {
        this.countryNumber = countryNumber;
    }

    public String getCountryFlag() {
        return countryFlag;
    }

    public void setCountryFlag(String countryFlag) {
        this.countryFlag = countryFlag;
    }
}
