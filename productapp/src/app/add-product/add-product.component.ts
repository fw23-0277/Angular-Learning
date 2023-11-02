import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../Types/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private productService:ProductService){}



  addProduct(product:Product):void{
      this.productService.addProduct(product).subscribe((res)=>{
        alert("Product Added Successfully")
          console.log(res);
      },(error)=>{
          console.log(error);
      })
  }

}
