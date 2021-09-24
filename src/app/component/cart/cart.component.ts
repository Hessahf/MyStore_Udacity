import { Component,Input, OnInit } from '@angular/core';
import {Item} from "./../../models/Item";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "./cartService";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Items = this.CartService.getItems();
  total: number = this.CartService.countTotal();
  constructor(private activatedRoute: ActivatedRoute,
              private CartService: CartService) {
  }

  ngOnInit() {
  }
  removeProduct(Item:Item) {
    this.Items = this.CartService.clearCart(Item.product.id)
  }
  getTotal(){
    this.total=this.CartService.countTotal();
    return this.total;
  }
}
