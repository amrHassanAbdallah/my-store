import { Component, OnInit } from '@angular/core';
import {  Product } from '../models/Product';
import {  Cart } from '../models/Cart';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [];

  constructor(private productsService:ProductsService,private cartService:CartService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data=>{
      this.products = data
    })
  }
  addProductToCart(p:Product){
    this.cartService.add(p)
  }


}
