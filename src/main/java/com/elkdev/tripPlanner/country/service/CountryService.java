package com.elkdev.tripPlanner.country.service;

import com.elkdev.tripPlanner.country.model.Country;
import com.elkdev.tripPlanner.country.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    
    private final CountryRepository countryRepository;

    @Autowired
    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }
    
    public List<Country> getAllCountries(){
        return countryRepository.findAll();
    }
}
