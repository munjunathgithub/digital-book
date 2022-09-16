import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import AuthResponse from '../entity/authResponse';
import SignInRequest from '../entity/signInRequest';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  auth: SignInRequest = new SignInRequest();
  loginResponse: AuthResponse = new AuthResponse();

  checkLogin() {
    this.signInService.login(this.auth).subscribe(
      resp => {
        if (resp.statusCode === 415) {
          alert(resp.message);
        } else {
          this.loginResponse = resp;
          if (resp.role === "author") {
            sessionStorage.setItem('role', resp.role);
            sessionStorage.setItem('username', resp.user.userName);
            sessionStorage.setItem('email',resp.user.email);
            this.router.navigate(['author']);
          }
        }
      },
      err => {
        this.loginResponse = err;
        alert(this.loginResponse.message);
      }
    )
  }

  constructor(private signInService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
