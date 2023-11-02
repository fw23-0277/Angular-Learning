import { Component ,OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../Types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartproducts:Product[] | undefined;

  totalPrice:number = 0;

  constructor(private productService:ProductService) {
    
  }

  ngOnInit(): void {
    this.getAllCartProducts()
     
  }
  getAllCartProducts(){
    this.productService.getAllCartProducts().subscribe((res)=>{
      this.cartproducts = res;
      res.forEach((product)=>{
        this.totalPrice += Number(product.price)
      })
    },(error)=>{
       console.log(error);
    })
  }

  removeProduct(id:number){
    this.productService.removeProductFromCart(id).subscribe((res)=>{
      this.getAllCartProducts();
    },(error)=>{
      console.log(error);
    })
  }

  getTotalPrice(){

   
    


  }

}
