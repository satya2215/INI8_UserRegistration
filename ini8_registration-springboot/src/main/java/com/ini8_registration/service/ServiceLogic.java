package com.ini8_registration.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ini8_registration.entity.RegisterEntity;
import com.ini8_registration.repository.RegisterRepo;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ServiceLogic {
	
	private final RegisterRepo repo;
	
	public ServiceLogic(RegisterRepo repo) {
		this.repo=repo;
	}
	
	//save details
	public RegisterEntity saveData(RegisterEntity reg) {
		RegisterEntity entity=repo.save(reg);
		return entity;
	}
	//get all users from database
	public List<RegisterEntity> getAllUser(){
		return repo.findAll();
	}
	
	//delete user based on id
	public void deleteUserById(Long id) {
		if(!repo.existsById(id)) {
			throw new EntityNotFoundException("Employee with id" + id + "not found");
		}
		repo.deleteById(id);
	}
	
	// get user by id 
		public RegisterEntity getUserById(Long id) {
			return repo.findById(id).orElse(null);
		}
		
		//update employee based on id
		public RegisterEntity updateUser(Long id,RegisterEntity ent) {
			Optional<RegisterEntity> optionaluser= repo.findById(id);
			
			if(optionaluser.isPresent()) {
				RegisterEntity existuser=optionaluser.get();
				
				existuser.setName(ent.getName());
				existuser.setEmail(ent.getEmail());
				existuser.setDate(ent.getDate());
				
				return repo.save(existuser);
			}
			return null;
		}
	

}
