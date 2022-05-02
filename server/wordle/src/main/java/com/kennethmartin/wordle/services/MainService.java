package com.kennethmartin.wordle.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kennethmartin.wordle.models.Creator;
import com.kennethmartin.wordle.models.Guesser;
import com.kennethmartin.wordle.repositories.CreatorRepository;
import com.kennethmartin.wordle.repositories.GuesserRepository;

@Service
public class MainService {
	// === Import Repositories =================================
	@Autowired
	private CreatorRepository creatorRepo;

	@Autowired
	private GuesserRepository guesserRepo;

	// === Creator CRUD ========================================
	// CREATE
	public Creator createCreator(Creator creator) {
		return creatorRepo.save(creator);
	}

	public List<Creator> findAllCreators() {
		return creatorRepo.findAll();
	}

	// FIND ONE Creator
	public Creator findOneCreator(Long id) {
		Optional<Creator> optionalCreator = creatorRepo.findById(id);
		if (optionalCreator.isPresent()) {
			return optionalCreator.get();
		}
		return null;
	}

	// === Guesser CRUD ========================================
	// CREATE
	public Guesser createGuesser(Guesser guesser) {
		return guesserRepo.save(guesser);
	}
}
