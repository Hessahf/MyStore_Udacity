import {Component, Input, Output,EventEmitter,OnInit} from '@angular/core';
import { Item } from 'src/app/models/Item';
import { product } from 'src/app/models/product';
import {CartService} from "./../cartService";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() productRemoved = new EventEmitter();
  @Input()
  Item!:Item;
  amount:number=1;
  constructor(private CartService:CartService) {
  }

  ngOnInit(): void {

  }
  modelChanged(Item:Item) {
    if (Item.quantity === 0) {
      this.productRemoved.emit(Item);
    }
  }
}
