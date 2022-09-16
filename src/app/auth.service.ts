import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AuthResponse from './components/entity/authResponse';
import SignInRequest from './components/entity/signInRequest';
import SignupRequest from './components/entity/signUpRequest';

const LOGIN_BASE_URL="http://localhost:9090/api/v1/digitalbooks/author"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn():Boolean{
    let islogged=sessionStorage.getItem('username');
    if(islogged){
      return true;
    }
    return false;
  }

  login(auth:SignInRequest){
    return this.http.post<AuthResponse>(LOGIN_BASE_URL+"/login",auth);
  }

  checkduplicateUser(auth:SignupRequest){
    return this.http.post(LOGIN_BASE_URL+"/checkDuplicate",auth);
  }

  createUser(auth:SignupRequest){
    return this.http.post<AuthResponse>(LOGIN_BASE_URL+"/signup",auth);
  }

  constructor(private http:HttpClient) { }
}
