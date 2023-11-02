import { Injectable } from '@angular/core';
import { Product } from '../Types/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:3000"

 

  constructor(private http:HttpClient) { }



  addProduct(product:Product):Observable<Object>{
    return this.http.post(`${this.baseUrl}/products` , product)
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/products/`+id);
  }

  addProductIntoCart(product:Product):Observable<Object>{
    return this.http.post(`${this.baseUrl}/productCart` , product)
  }

  getAllCartProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/productCart`)
  }

  getProductFromCart(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/productCart/`+id);
  }

  removeProductFromCart(id:number):Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/productCart/`+id);
  }




}
