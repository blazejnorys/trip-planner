package com.elkdev.tripPlanner.continent.service;

import com.elkdev.tripPlanner.continent.model.Continent;
import com.elkdev.tripPlanner.continent.repository.ContinentRepository;
import com.elkdev.tripPlanner.country.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ContinentService {

    private final ContinentRepository continentRepository;

    @Autowired
    public ContinentService(ContinentRepository continentRepository) {
        this.continentRepository = continentRepository;
    }


    public List<Continent> findAllContinents(){
        List<Continent> continentList = continentRepository.findAll();
        for (Continent continent : continentList) {
            List<Country> countryList = continent.getCountryList();
            for (Country country : countryList) {
                country.setCountryFlag("https://www.countryflags.io/"+country.getCountryCode()+"/flat/16.png");
            }
        }
        return continentList;
    }

}
