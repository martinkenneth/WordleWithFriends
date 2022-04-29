package com.kennethmartin.wordle.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kennethmartin.wordle.models.Creator;
import com.kennethmartin.wordle.models.Guesser;
import com.kennethmartin.wordle.services.MainService;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:8080" })
public class APIController {
	@Autowired
	private MainService mainService;

	// === TESTING FOR REACT ===================================
	@RequestMapping(value = "/api")
	public String say() {
		return "Sending Hello To React";
	}

	// === Creator CRUD ========================================
	// CREATE
	@PostMapping("/api/creators")
	public Creator createCreator(@RequestParam(value = "name") String name, @RequestParam(value = "word") String word) {
		Creator creator = new Creator(name, word);
		return mainService.createCreator(creator);
	}

//	@PostMapping("/api/creators")
//	public ResponseEntity<Creator> createCreator(@RequestBody Creator creator) throws URISyntaxException {
//		Creator newCreator = mainService.createCreator(creator);
//		return ResponseEntity.created(new URI("/creators/" + newCreator.getId())).body(newCreator);
//	}

//	@PostMapping("/api/creators")
//	@ResponseStatus(HttpStatus.CREATED)
//	public Creator createCreator(@RequestBody Creator creatorFrom) {
//		Creator creator = new Creator();
//		return mainService.createCreator(creator);
//	}

	// FIND All Creators -- TESTING --
//	@GetMapping("/api/creators")
//	public List<Creator> findAllCreators(@PathVariable("id") Long id) {
//		return mainService.findAllCreators();
//	}

	// FIND ONE Creator
	@GetMapping("/api/creators/{id}")
	public Creator findOneCreatorByID(@PathVariable("id") Long id) {
		return mainService.findOneCreator(id);
	}

	// Find all Guesser Data?

	// === Guesser CRUD ========================================
	@PostMapping("/api/guessers")
	public Guesser createGuesser(@RequestParam(value = "name") String name,
			@RequestParam(value = "attempts") Integer attempts, @RequestParam(value = "creator_id") Long creator_id) {
		Creator creator = mainService.findOneCreator(creator_id);
		Guesser guesser = new Guesser(name, attempts, creator);
//		mainService.createGuesser(guesser);
		return mainService.createGuesser(guesser);
	}

//	=== Example Code for PostMapping ===
//	Utilize @RequestBody for axios requests in frontend?
//	@PostMapping("/")
//	public void add(@RequestBody User user) {
//		userService.saveUser(user);
//	}
}
