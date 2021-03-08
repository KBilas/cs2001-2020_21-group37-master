package com.example.Group37.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "userfavourites")
@IdClass(UserFavouritesId.class)
public class UserFavourites {

	@Id
	@Column(name = "user_id")
	private int userId;

	@Id
	@Column(name = "exercise_id")
	private int exerciseId;

	public UserFavourites() {
		
	}
	
	public UserFavourites(int userId, int exerciseId) {
		super();
		this.userId = userId;
		this.exerciseId = exerciseId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getExerciseId() {
		return exerciseId;
	}

	public void setExerciseId(int exerciseId) {
		this.exerciseId = exerciseId;
	}
	
	
	
}