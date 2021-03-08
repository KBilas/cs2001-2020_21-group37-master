package com.example.Group37.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "exercises")
public class Exercise {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "exercise_id", columnDefinition = "int")
	private int exerciseId;

	@Column(name = "exercise_name", columnDefinition = "varchar(45)")
	private String name;

	@Column(name = "repetitions", columnDefinition = "varchar(45)")
	private String repititions;
	
	@Column(name = "sets", columnDefinition = "varchar(45)")
	private String sets;
	
	@Column(name = "time_between_sets", columnDefinition = "varchar(45)")
	private String restTimeBetween;
	
	@Column(name = "time_after_exercise", columnDefinition = "varchar(45)")
	private String restTimeAfter;
	
	@Column(name = "exercise_description")
	private String exerciseDescription;
	
	@Column(name = "how_to_do_exercise")
	private String exerciseInstruction;
	
	@Column(name = "exercise_image")
	private String imgSrc;

	public int getExerciseId() {
		return exerciseId;
	}

	public void setExerciseId(int exerciseId) {
		this.exerciseId = exerciseId;
	}

	public String getExerciseDescription() {
		return exerciseDescription;
	}

	public void setExerciseDescription(String exerciseDescription) {
		this.exerciseDescription = exerciseDescription;
	}

	public String getExerciseInstruction() {
		return exerciseInstruction;
	}

	public void setExerciseInstruction(String exerciseInstruction) {
		this.exerciseInstruction = exerciseInstruction;
	}

	public Exercise() {

	}

	public Exercise(String name, String type) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	public String getRepititions() {
		return repititions;
	}

	public void setRepititions(String repititions) {
		this.repititions = repititions;
	}

	public String getSets() {
		return sets;
	}

	public void setSets(String sets) {
		this.sets = sets;
	}

	public String getRestTimeAfter() {
		return restTimeAfter;
	}

	public void setRestTimeAfter(String restTimeAfter) {
		this.restTimeAfter = restTimeAfter;
	}

	public String getRestTimeBetween() {
		return restTimeBetween;
	}

	public void setRestTimeBetween(String restTimeBetween) {
		this.restTimeBetween = restTimeBetween;
	}

	public String getAdditionalInfo() {
		return exerciseDescription;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.exerciseDescription = additionalInfo;
	}

	public String getImgSrc() {
		return imgSrc;
	}

	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}

}