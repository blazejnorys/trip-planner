package com.elkdev.tripPlanner.continent.repository;

import com.elkdev.tripPlanner.continent.model.Continent;
import com.elkdev.tripPlanner.country.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ContinentRepository extends JpaRepository<Continent, String> {

    List<Continent> findAll();
}
