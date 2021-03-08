package com.example.Group37.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.example.Group37.model.UserFavourites;
import com.example.Group37.model.UserFavouritesId;

public interface UserFavouritesRepository extends JpaRepository<UserFavourites, UserFavouritesId> {
  List<UserFavourites> findByUserIdContaining(String name);
  
  @Query ("SELECT exerciseId FROM UserFavourites WHERE userId = ?1")
  List<Integer> getFavourites(int id);
  
  @Transactional
  @Modifying
  @Query ("DELETE FROM UserFavourites WHERE userId = ?1 AND exerciseId = ?2")
  void deleteFavourite(int userId, int exerciseId);
}