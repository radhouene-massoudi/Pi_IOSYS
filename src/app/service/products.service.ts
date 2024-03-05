import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  fetchProducts(){
 return this.http.get("http://sp70:3000/product")
  }
  addProduct(data:any){
return this.http.post("http://sp70:3000/product/add",data)
  }
}
