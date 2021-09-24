import {Component, Input, OnInit} from '@angular/core';
import { product } from 'src/app/models/product';
import {Location} from "@angular/common";
import {CartService} from "../../../cart/cartService"

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: product;
  amount: number = 0;
  constructor(private location: Location,private CartService:CartService) { }

  ngOnInit(): void {
  }
  addToCart(product: product,q:number) {
    this.CartService.addToCart(product,q);
    window.alert('Your product has been added to the cart!');
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.amount = event.target.value;
  }
}
