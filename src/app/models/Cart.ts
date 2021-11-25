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
    console.log(p)
    this.cost += (p.price * p.count)
    if (typeof this.itemsPositionsById[p.id] != "undefined") {
      this.products[this.itemsPositionsById[p.id]].count += p.count
    } else {
      this.products.push(p)
      this.itemsPositionsById[p.id] = this.numberOfProducts
      this.numberOfProducts++
    }
  }
}

