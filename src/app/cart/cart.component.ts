import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Cart = new Cart();
  maxCount:number[] = [...Array(10).keys()];


  constructor(private cartService:CartService) {
    this.maxCount.shift()

   }

  ngOnInit(): void {
    this.cart = this.cartService.get()
  }
  updateProductCount(n:any){
    let val = parseInt(n.target.value)
    let product = this.cart.products[this.cart.itemsPositionsById[n.target.id]]
    const obj2 = { ...product };
    obj2.count = val
    this.cart.add(obj2)
  }

}
