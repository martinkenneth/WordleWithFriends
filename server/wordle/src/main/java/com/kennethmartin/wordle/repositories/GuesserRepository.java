package com.kennethmartin.wordle.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.kennethmartin.wordle.models.Guesser;

public interface GuesserRepository extends CrudRepository<Guesser, Long> {
	List<Guesser> findAll();

	List<Guesser> findByCreatorId(Long id);
}
