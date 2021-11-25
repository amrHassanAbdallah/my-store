import { MapType } from "@angular/compiler";

export class Product {
    id: number;
    name?: string;
    url?: string;
    description?: string;
    price: number;
    count:number
    constructor() {
        this.id = 1;
        this.name = '';
        this.url = '';
        this.description = '';
        this.price = 21.0
        this.count = 1
      }
    }
  
