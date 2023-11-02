import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../Types/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    this.getAllProducts();
    
  }

  products: Product[] | undefined;

  constructor(private productService:ProductService){}


  getAllProducts(){
    this.productService.getAllProducts().subscribe((res)=>{
      this.products = res;
    },(error)=>{
      console.log(error)
    })
  }

  addProductIntoCart(id:number){
        this.productService.getProduct(id).subscribe((res)=>{
          this.productService.addProductIntoCart(res).subscribe((res)=>{
             alert("Product Added Into Cart Successfully")
          })
        },(error)=>{
          alert("Product Already Into Cart")
          console.log(error)
          
        })
  }

}
