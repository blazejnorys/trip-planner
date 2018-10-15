package com.elkdev.tripPlanner.continent.controller;

import com.elkdev.tripPlanner.continent.model.Continent;
import com.elkdev.tripPlanner.continent.service.ContinentService;
import com.elkdev.tripPlanner.country.model.Country;
import com.elkdev.tripPlanner.country.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/continent")
@CrossOrigin
public class ContinentController {

    private final ContinentService continentService;

    @Autowired
    public ContinentController(ContinentService continentService) {
        this.continentService = continentService;
    }

    @GetMapping(value = "/get-all")
    public List<Continent> getAllContinents(){
        return continentService.findAllContinents();
    }
}