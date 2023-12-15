package com.example.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Task;

@RestController
public class TaskController {
	
	
	public ResponseEntity<Task> addTask(@RequestBody Task task){
		return null;
	}
	
	

}
