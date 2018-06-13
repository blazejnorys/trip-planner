package com.elkdev.tripPlanner;

import com.elkdev.tripPlanner.user.model.User;
import com.elkdev.tripPlanner.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class TripPlannerApplication {

	final
	UserRepository userRepository;

	@Autowired
	public TripPlannerApplication(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Bean
	CommandLineRunner runner(){
		return args -> {
			PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			User user = new User();
			user.setEnabled(true);
			user.setUsername("login");
			user.setPassword(passwordEncoder.encode("password"));
			userRepository.save(user);
		};
	}


	public static void main(String[] args) {
		SpringApplication.run(TripPlannerApplication.class, args);
	}
}
