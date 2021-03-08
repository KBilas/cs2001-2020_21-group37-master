package com.example.Group37.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Group37.model.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, Integer> {
  List<Exercise> findByNameContaining(String name);
}