import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.css']
})
export class ConfirmationFormComponent implements OnInit {
  full_name:string= '';
  credit_card:string ='';
  address:string='';
  location:Location;

  constructor(private route:Router, private cartService:CartService) { 
    this.location = location
  }

  ngOnInit(): void {
  }
  submitForm():void{
    let cost = this.cartService.cart.getCost()
    this.cartService.clear()
    this.route.navigateByUrl('/confirmation?name='+this.full_name+"&cost="+cost);
  }

}
