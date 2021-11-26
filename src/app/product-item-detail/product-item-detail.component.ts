import { Component, OnInit, Output,EventEmitter } from '@angular/core';
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
  @Output() addToCart:EventEmitter<Product> = new EventEmitter;

  constructor(private route: ActivatedRoute,private productsService:ProductsService,private cartService:CartService) { 
    this.route.params.subscribe(params => {
      this.id = +params['id'] as number; 
   });
   this.maxCount.shift()

  }

  ngOnInit(): void {
    this.productsService.getProduct(this.id).subscribe(p=>{
      this.product =  p
    })
  }


  updateProductCount(n:any){
    this.product.count = parseInt(n.target.value)

  }
  
  add(p:Product){
    this.addToCart.emit(p)
    alert("Product added to the cart!!")
  }
}
