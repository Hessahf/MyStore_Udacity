import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { product } from 'src/app/models/product';
import {ProductService} from "../Home/productList/productService"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: product[] = this.ProductService.getProducts();
  constructor(private httpClient: HttpClient,private ProductService:ProductService) {
  }

  ngOnInit() {
    this.products=this.ProductService.getProducts();
  }
}
