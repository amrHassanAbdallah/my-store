import { Product } from "./Product";

export class Cart {
  products: Product[];
  numberOfProducts: number
  itemsPositionsById: { [key: number]: number; };
  cost: number;
  constructor() {
    this.products = [];
    this.numberOfProducts = 0
    this.itemsPositionsById = {}
    this.cost = 0
  }
  add(p: Product) {
    if (typeof this.itemsPositionsById[p.id] != "undefined") {
      let difference:number = p.count  
      this.products[this.itemsPositionsById[p.id]].count += p.count
      this.cost += difference * p.price
    } else {
    this.cost += (p.price * p.count)
      this.products.push(p)
      this.itemsPositionsById[p.id] = this.numberOfProducts
      this.numberOfProducts++
    }
  }
  updateProductCount(id:number,count:number){
    let postion =  this.itemsPositionsById[id]
    let product = this.products[postion]

    if (count == 0){
      this.products.splice(postion, 1);
      delete this.itemsPositionsById[id]
      this.numberOfProducts--
    }else{
      product.count = count
    }
      let difference = count - product.count
      this.cost += difference * product.price
    

  }
  clear(){
    this.products = [];
    this.numberOfProducts = 0
    this.itemsPositionsById = {}
    this.cost = 0
  }
  getCost(){
    return (Math.round((this.cost) * 100) / 100).toFixed(2)
  }
}

