package com.elkdev.tripPlanner.user.repository;

import com.elkdev.tripPlanner.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {

    User save(User user);

    List<User> findAll();
}
