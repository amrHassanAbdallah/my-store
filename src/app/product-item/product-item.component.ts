import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product:Product;
  maxCount:number[] = [...Array(10).keys()];
  //@Output() addToCart: EventEmitter<Product> = new EventEmitter;

  constructor(private cartService:CartService) { 
    this.product = {
      id: 0,
      price:0,
      count:1
    }
    this.maxCount.shift()
   }

  ngOnInit(): void {
  }

  updateProductCount(n:any){
    this.product.count = parseInt(n.target.value)

  }
  // add(p: Product) {
  //   this.addToCart.emit(p)
  // }

  add(p:Product){
   this.cartService.add(p) 
  }

}
