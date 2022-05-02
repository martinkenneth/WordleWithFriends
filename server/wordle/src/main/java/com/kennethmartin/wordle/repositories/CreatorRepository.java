package com.kennethmartin.wordle.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.kennethmartin.wordle.models.Creator;

public interface CreatorRepository extends CrudRepository<Creator, Long> {
	List<Creator> findAll();
}
