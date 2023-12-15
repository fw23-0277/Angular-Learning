import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-app';

  isUserLogin:boolean = false

  checkUserLogin(value: any){
    console.log(value)
  }
}
