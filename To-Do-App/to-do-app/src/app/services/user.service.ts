import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserSiggIn, UserSignUp } from '../types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:String = "http://localhost:8080/auth";

  constructor(private http:HttpClient, private router: Router) { }


  userSignUp(userData:UserSignUp):Observable<Object>{
     return this.http.post(`${this.baseUrl}/signup`,userData);
  }

  userSignIn(userLoginData:UserSiggIn){
    return this.http.post(`${this.baseUrl}/signin`,userLoginData)
  }

}
