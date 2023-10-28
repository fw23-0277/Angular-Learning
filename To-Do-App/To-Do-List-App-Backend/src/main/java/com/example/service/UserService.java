package com.example.service;

import com.example.entity.User;
import com.example.exception.UserException;
import com.example.request.LoginRequest;
import com.example.response.AuthResponse;

public interface UserService {
	
	/**
	 * 
	 * @param user
	 * @return
	 */
	public AuthResponse createUser(User user) throws UserException;
	
	
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	public  AuthResponse userLogin(LoginRequest request);
		

}
