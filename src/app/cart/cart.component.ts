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
  maxCount:number[] = [...Array(100).keys()];



  constructor(private cartService:CartService) {
   }

  ngOnInit(): void {
    this.cart = this.cartService.get()
  }
  updateProductCount(n:any){
    let val = parseInt(n.target.value)
    let productId = parseInt(n.target.id)
    this.cart.updateProductCount(productId,val)
    if (val == 0){
      alert("Product is removed from the cart!!")

    }else{
      alert("Product added to the cart!!")

    }

  }

}
