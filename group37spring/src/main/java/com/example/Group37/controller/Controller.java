package com.example.Group37.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Group37.model.User;
import com.example.Group37.model.UserFavourites;
import com.example.Group37.model.UserFavouritesId;
import com.example.Group37.repository.ExerciseRepository;
import com.example.Group37.repository.UserFavouritesRepository;
import com.example.Group37.repository.APIUserRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class Controller {

	@Autowired
	ExerciseRepository exerciseRepository;

	@Autowired
	UserFavouritesRepository userFavouritesRepository;

	@Autowired
	APIUserRepository apiUserRepository;

	@PostMapping("/createUser")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		try {
			int userId = user.getUserId();
			String userName = user.getUserName();
			String userEmail = user.getUserEmail();

			User newUser = apiUserRepository.save(new User(userId, userName, userEmail));
			return new ResponseEntity<>(newUser, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/userExist")
	public ResponseEntity<Boolean> checkUser(@RequestBody User user) {
		try {
			String userEmail = user.getUserEmail();

			User newUser = apiUserRepository.findByuserEmail(userEmail);
			if (newUser == null) {
				return new ResponseEntity<>(false, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(true, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/getUserId")
	public ResponseEntity<Integer> getUserId(@RequestBody User user) {
		try {
			String email = user.getUserEmail();
			User userTemp = apiUserRepository.findByuserEmail(email);
			int id = userTemp.getUserId();
			return new ResponseEntity<>(id, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("addToFav")
	public ResponseEntity<HttpStatus> addToFavourites(@RequestBody UserFavouritesId user) {
		try {
			System.out.println("in try");
			int userId = user.getUserId();
			int exerciseId = user.getExerciseId();

			userFavouritesRepository.save(new UserFavourites(userId, exerciseId));
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/getAllExercises")
	public ResponseEntity<List<Object>> getPushDay() {
		List<Object> exercises = new ArrayList<>();
		try {
			exerciseRepository.findAll().forEach(i -> exercises.add(i));
			return new ResponseEntity<>(exercises, HttpStatus.OK);
		} catch (Exception e2) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/getUserFavourites")
	public ResponseEntity<List<Integer>> getUserFavourites(@RequestBody User user) {
		try {
			String email = user.getUserEmail();
			User userTemp = apiUserRepository.findByuserEmail(email);
			int userId = userTemp.getUserId();
			List<Integer> favourites = userFavouritesRepository.getFavourites(userId);
			return new ResponseEntity<>(favourites, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/deleteUserFavourite")
	public ResponseEntity<HttpStatus> deleteUserFavourite(@RequestBody UserFavourites user) {
		try {
			int userId = user.getUserId();
			int exerciseId = user.getExerciseId();
			userFavouritesRepository.deleteFavourite(userId, exerciseId);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			System.out.println("error: " + e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/updateUsers/{id}")
	public ResponseEntity<User> updateUsers(@PathVariable("id") int id, @RequestBody User users) {
		Optional<User> updateUsers = apiUserRepository.findById(id);

		if (updateUsers.isPresent()) {
			User _users = updateUsers.get();
			_users.setUserName(users.getUserName());
			_users.setUserEmail(users.getUserEmail());
			return new ResponseEntity<>(apiUserRepository.save(_users), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteAllUsers")
	public ResponseEntity<HttpStatus> deleteAllUsers() {
		try {
			apiUserRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
}