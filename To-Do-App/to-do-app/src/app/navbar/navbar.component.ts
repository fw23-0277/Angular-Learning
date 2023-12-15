import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen = false;

  isUserLogin = false;
  userName: string = '';

  constructor(private location: Location, private userService: UserService) {
   
  }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // Parse the JSON string from local storage to an object
      const user = JSON.parse(storedUser);
      this.isUserLogin = !this.isUserLogin;
      this.userName = `Welcome ${user.user.firstName}`;
    }
  }

  refreshPage() {
    window.location.reload();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  userLogout(): void {
    localStorage.clear();
    this.refreshPage();
  }
}
