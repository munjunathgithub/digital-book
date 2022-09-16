import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import AuthResponse from '../entity/authResponse';
import SignupRequest from '../entity/signUpRequest';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

auth:SignupRequest=new SignupRequest();
authResponse:AuthResponse=new AuthResponse();

createUser(){
  this.authService.createUser(this.auth).subscribe(
    resp=>{
       this.authResponse=resp;
       alert(resp.message);
    },err=>{
      this.authResponse=err;
      alert("Something went wrong");
    }
  )
}

checkDuplicate(){
  this.authService.checkduplicateUser(this.auth).subscribe(
    resp=>{
      if(resp){
        alert("User with email already present");
      }
    },
    err=>{
      alert("Error");
    }
  )
}

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
