import { product } from './product';
import {Observable} from "rxjs";

export class Item {

  product: product;
  quantity: number;
  constructor(product:product,q:number) {
    this.product=product;
    this.quantity=q
  }
}
