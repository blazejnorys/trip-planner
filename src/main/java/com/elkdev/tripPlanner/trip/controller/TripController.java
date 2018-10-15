package com.elkdev.tripPlanner.trip.controller;

import com.elkdev.tripPlanner.trip.model.Trip;
import com.elkdev.tripPlanner.trip.service.TripService;
import com.elkdev.tripPlanner.user.model.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(description = "Users resource")
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/trip")
public class TripController {

    private final TripService tripService;

    @Autowired
    public TripController(TripService tripService) {
        this.tripService = tripService;
    }

    @ApiOperation(value = "Get trips for user")
    @PostMapping(value = "/userTrips")
    public List<Trip> getAllTripsForUser(@RequestBody User user){
        return tripService.getAllTripByUser(user.getUsername());
    }
}
