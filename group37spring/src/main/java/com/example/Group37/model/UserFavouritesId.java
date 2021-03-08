package com.example.Group37.model;

import java.io.Serializable;
import java.util.Objects;

public class UserFavouritesId implements Serializable {
	
	private int userId;
	private int exerciseId;
	
	public UserFavouritesId() {
		
	}

	public UserFavouritesId(int userId, int exerciseId) {
		super();
		this.userId = userId;
		this.exerciseId = exerciseId;
	}
	
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserFavouritesId userFavouritesId = (UserFavouritesId) o;
        return userId == userFavouritesId.userId &&
                exerciseId == userFavouritesId.exerciseId;
    }
	
    @Override
    public int hashCode() {
        return Objects.hash(userId, exerciseId);
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
