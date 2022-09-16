import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  logout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

  constructor(public authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

}
