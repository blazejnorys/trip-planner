package com.elkdev.tripPlanner.user.controller;


import com.elkdev.tripPlanner.user.model.User;
import com.elkdev.tripPlanner.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

    private final UserService userService;
    private final BCryptPasswordEncoder bcryptEncoder;

    @Autowired
    public UserController(UserService userService, BCryptPasswordEncoder bcryptEncoder) {
        this.userService = userService;
        this.bcryptEncoder = bcryptEncoder;
    }


    @RequestMapping(value="/users", method = RequestMethod.GET)
    public List<User> listUser(){
        return userService.findAll();
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public Optional<User> getOne(@PathVariable(value = "id") Integer id){
        return userService.findById(id);
    }

    @RequestMapping(value="/signup", method = RequestMethod.POST)
    public User saveUser(@RequestBody User user){
        user.setPassword(bcryptEncoder.encode(user.getPassword()));
        return userService.save(user);
    }



}
