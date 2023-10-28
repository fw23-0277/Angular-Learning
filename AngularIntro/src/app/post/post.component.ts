import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  implements OnInit{

  title:String = "List Of Post";
  messagePost:String = "Message Post";

  postParentMessage :string = "Message comming from post parent"; 

  @Input() fromParent:string; 
  
   constructor(){
    this.fromParent = "";
   }

  ngOnInit(): void {
    
  }

}
