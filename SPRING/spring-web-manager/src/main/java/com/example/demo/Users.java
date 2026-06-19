package com.example.demo;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Users {
	
	@GetMapping("/api/users")
	public List<UsersModel> getUsers() {
		return Arrays.asList(new UsersModel(1, "Studenti", Arrays.asList("Luca", "Margo"), 32),
				new UsersModel(2, "Studenti", Arrays.asList("Anna", "Marco"), 28),
				new UsersModel(3, "Studenti", Arrays.asList("Sara", "Luca"), 35)

		);
	}


}
