import {Item} from "../../models/Item";
import { Injectable } from "@angular/core";
import {product} from "../../models/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];
  /* . . . */
   Item? :Item;
   total:number=0;
  addToCart(product:product,q:number) {
    this.Item = new Item(product, q);
    this.items.push(this.Item);
  }

  getItems() {

    return this.items;
  }
  countTotal(){
    this.total=0;
    for (var i =0 ; i< this.items.length;i++){
      this.total+=(this.items[i].product.price*this.items[i].quantity);
    }
    console.log(this.total)
    return  this.total;
  }
  clearCart(id:number) {
    for (var i =0; i<this.items.length;i++){
      if(this.items[i].product.id==id){
        this.items =this.items.filter(it => it.product.id !== this.items[i].product.id);
      }
    }
    return this.items;
  }

  /* . . . */
}
