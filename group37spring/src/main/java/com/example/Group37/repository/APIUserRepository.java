package com.example.Group37.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.Group37.model.User;

public interface APIUserRepository extends JpaRepository<User, Integer> {
  List<User> findByUserNameContaining(String name);
  User findByuserEmail(String name);
}