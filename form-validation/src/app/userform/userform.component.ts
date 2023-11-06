import { Component } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {


  user = {
    name: '',
    email: '',
    password: '',
    age: null,
    country: '',
    acceptance: false
  };
userForm: any;

  onSubmit() {
    
    console.log(this.user);
  }

}
