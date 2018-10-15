package com.elkdev.tripPlanner.country.repository;

import com.elkdev.tripPlanner.country.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends JpaRepository<Country, Integer> {

}
