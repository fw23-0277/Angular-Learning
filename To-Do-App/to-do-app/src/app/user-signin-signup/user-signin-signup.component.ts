import { Component, EventEmitter, Output } from '@angular/core';
import { UserSiggIn, UserSignUp } from '../interface/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signin-signup',
  templateUrl: './user-signin-signup.component.html',
  styleUrls: ['./user-signin-signup.component.css'],
})
export class UserSigninSignupComponent {
  showSignInForm: boolean = true;
  constructor(private userService: UserService, private router: Router) {}

  
  changeForm(): void {
    this.showSignInForm = !this.showSignInForm;
  }

  refreshPage() {
    window.location.reload();
  }

  userSignIn(userLoginData: UserSiggIn) {
    this.userService.userSignIn(userLoginData).subscribe(
      (res) => {
        localStorage.setItem('user', JSON.stringify(res));
     
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      },
      ()=>{
        // this.refreshPage()
      }
    );
  }

  userSignUp(userData: UserSignUp) {
    this.userService.userSignUp(userData).subscribe(
      (res) => {
        alert('User Acount Created Successfully');
        this.showSignInForm = !this.showSignInForm;
      },
      (error) => {
        console.log(error);
      },
      () =>{
          console.log("")
      }
      
    );
  }

 


}
