import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Cart = new Cart();

  constructor() { }
  add(p:Product){
    this.cart.add(p)
  }
  get(){
    return this.cart
  }
  clear(){
    this.cart.clear()
  }
}
