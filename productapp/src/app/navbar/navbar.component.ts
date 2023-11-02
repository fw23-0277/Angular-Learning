import { Component , OnInit} from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  cartItemCount:number =  0;

  constructor(private productServcie:ProductService){
    
  }

  ngOnInit(): void {
    this.productServcie.getAllCartProducts().subscribe((res)=>{
        this.cartItemCount = res.length
    },(error)=>{
        console.log(error)
    })

  }





}
