import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { filter,map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("./assets/data.json")
    .pipe(map(products =>{
      return products.map(product => {
        product.count =1
        return product
      });
    }))
  }
  getProduct(id:number):Observable<Product>{
     return this.getProducts().pipe(map(products =>{
       let fl = products.filter(product => product.id == id);
       return fl[0]
     })) 
  }
}
