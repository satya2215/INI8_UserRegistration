package com.ini8_registration.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ini8_registration.entity.RegisterEntity;
import com.ini8_registration.service.ServiceLogic;

import jakarta.persistence.EntityNotFoundException;

@RestController
@CrossOrigin("*")
@RequestMapping("/ini8")

public class Controller {
	
	private final ServiceLogic service;
	
	public Controller(ServiceLogic service) {
		this.service=service;
	}
	
	@PostMapping("/register")
	public RegisterEntity saveData(@RequestBody RegisterEntity reg) {
		return service.saveData(reg);
	}
	
	@GetMapping("/users")
	public List<RegisterEntity> getAllUser(){
		return service.getAllUser();
		
	}
	
	@DeleteMapping("/userDelete/{id}")
	public ResponseEntity<?> deleteUserById(@PathVariable Long id){
		try {
			// pass the id to the service method 
			service.deleteUserById(id);
			return new ResponseEntity<>("user with ID "+ id +"deleted successfully",HttpStatus.OK );
		}
		catch(EntityNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
		}
	
	@GetMapping("/userId/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Long id){
		RegisterEntity ent=service.getUserById(id);
		if(ent==null)return ResponseEntity.notFound().build();
		return ResponseEntity.ok(ent);
	}
	
	@CrossOrigin(origins = "http://localhost:5173")
	@PatchMapping("/userId/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody RegisterEntity ent){
		RegisterEntity updated=service.updateUser(id, ent);
		if(updated == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		return ResponseEntity.ok(updated);
	}
	

}
