package com.elkdev.tripPlanner.user.repository;

import com.elkdev.tripPlanner.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {

    User save(User user);

    List<User> findAll();

    User findByUsername(String username);

    Optional<User> findById(Integer id);
}
