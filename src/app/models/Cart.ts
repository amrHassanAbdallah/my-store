    export class Cart {
      products:Product[];
      numberOfProducts:number
      itemsPositionsById:{[key:number]:number;};
      cost:number;
      constructor(){
        this.products = [];
        this.numberOfProducts = 0
        this.itemsPositionsById ={}
        this.cost = 0
      }
      add(p:Product){
        console.log(p)
        this.cost += (p.price * p.count)
        if (this.itemsPositionsById[p.id]){
          this.products[this.itemsPositionsById[p.id]].count += p.count
        }else{
          this.products.push(p)
          this.itemsPositionsById[p.id] = this.numberOfProducts
          this.numberOfProducts++ 
        }
      }
    }

  