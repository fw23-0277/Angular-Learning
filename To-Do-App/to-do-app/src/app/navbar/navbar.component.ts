import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mobileMenuOpen = false;

  isUserLogin = false;
  userName:string =  ""


  

  constructor(private location:Location){
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // Parse the JSON string from local storage to an object
      const user = JSON.parse(storedUser);
      this.isUserLogin = !this.isUserLogin
      this.userName = `Welcome ${user.user.firstName}`
    }
  }
  
  chageNavbar(){
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // Parse the JSON string from local storage to an object
      const user = JSON.parse(storedUser);
      this.isUserLogin = !this.isUserLogin
        console.log(user.user.firstName)
      this.userName = `Welcome ${user.user.firstName}`
    }
  }

  ngOnInit(): void {
   
  }


  
  
  

 
 
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

}
