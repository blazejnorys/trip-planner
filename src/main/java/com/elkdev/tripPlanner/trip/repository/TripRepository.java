package com.elkdev.tripPlanner.trip.repository;

import com.elkdev.tripPlanner.trip.model.Trip;
import com.elkdev.tripPlanner.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripRepository extends JpaRepository<Trip,Integer> {

    List<Trip> findAllByUser(User user);
}
