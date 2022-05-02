package com.kennethmartin.wordle.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "creators")
public class Creator {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull(message = "Please enter a Name.")
	private String name;

	@NotNull(message = "Please enter a valid word.")
	private String word;

	// === One to Many Relationship =================================
	@OneToMany(mappedBy = "creator", fetch = FetchType.LAZY)
	private List<Guesser> guessers;
	// ==============================================================

	@Column(updatable = false) // This will not allow the createdAt column to be updated after creation.
	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss") // DateTime formatted for creater retrieval.
	private Date createdAt;

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	// === Constructors =============================================
	public Creator() {

	}

	public Creator(String name, String word) {
		this.name = name;
		this.word = word;
	}

	// === Getters and Setters ======================================
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	public List<Guesser> getGuessers() {
		return guessers;
	}

	public void setGuessers(List<Guesser> guessers) {
		this.guessers = guessers;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
}
