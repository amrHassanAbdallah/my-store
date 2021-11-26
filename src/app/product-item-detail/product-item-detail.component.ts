import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  id: number = 0;
  product:Product= new Product();
  maxCount:number[] = [...Array(10).keys()];


  constructor(private route: ActivatedRoute,private productsService:ProductsService,private cartService:CartService) { 
    this.route.params.subscribe(params => {
      this.id = +params['id'] as number; 
   });
   this.maxCount.shift()

  }

  ngOnInit(): void {
    this.product =  this.productsService.getProduct(this.id)
  }


  updateProductCount(n:any){
    this.product.count = parseInt(n.target.value)

  }
  // add(p: Product) {
  //   this.addToCart.emit(p)
  // }

  add(p:Product){
   this.cartService.add(p) 
   alert("Product added to the cart!!")
  }
}
