import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { product } from 'src/app/models/product';
import {ActivatedRoute} from "@angular/router";
import { ProductService } from '../../productService';
import { CartService } from '../../../../cart/cartService';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  errorMessage = '';
  product: product|undefined;
  amount:number=0;
  constructor(private location: Location,private route: ActivatedRoute,private productService: ProductService,private CartService:CartService) {
  }
  ngOnInit():void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = this.productService.getProduct( productIdFromRoute);

  }
  addToCart(product: product|undefined,q:number) {
    if(product!=undefined){
    this.CartService.addToCart(product,q);
    window.alert('Your product has been added to the cart!');}
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.amount = event.target.value;
  }
 onBack():void{
   this.location.back();
 }
}
