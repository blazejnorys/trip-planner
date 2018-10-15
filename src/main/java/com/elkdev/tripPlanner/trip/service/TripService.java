package com.elkdev.tripPlanner.trip.service;

import com.elkdev.tripPlanner.trip.model.Trip;
import com.elkdev.tripPlanner.trip.repository.TripRepository;
import com.elkdev.tripPlanner.user.model.User;
import com.elkdev.tripPlanner.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripService {

    @Autowired
    private TripRepository tripRepository;
    @Autowired
    private UserService userService;

    public List<Trip> getAllTrips(){
        return tripRepository.findAll();
    }

    public List<Trip> getAllTripByUser(String username) {
        User user = userService.findByUsername(username);
        return tripRepository.findAllByUser(user);
    }
}
