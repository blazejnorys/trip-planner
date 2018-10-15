package com.elkdev.tripPlanner;

import com.elkdev.tripPlanner.country.model.Country;
import com.elkdev.tripPlanner.security.model.UserRole;
import com.elkdev.tripPlanner.user.model.User;
import com.elkdev.tripPlanner.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.convert.Jsr310Converters;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;

@EntityScan(
		basePackageClasses = {
				TripPlannerApplication.class,
				Jsr310Converters.class
		}
)
@SpringBootApplication
public class TripPlannerApplication {

	final
	UserRepository userRepository;

	@Autowired
	public TripPlannerApplication(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

//	@Bean
//	CommandLineRunner runner(){
//		return args -> {
//			PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//			User user = new User();
//			user.setEnabled(true);
//
//			user.setUsername("login");
//			user.setUserRole(UserRole.ROLE_USER);
//			user.setPassword(passwordEncoder.encode("password"));
//			userRepository.save(user);
//		};
//	}


	public static void main(String[] args) {
		SpringApplication.run(TripPlannerApplication.class, args);
	}
}
