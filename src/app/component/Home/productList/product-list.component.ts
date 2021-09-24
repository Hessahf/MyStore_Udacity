import { Component, Output,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {product} from "../../../models/product";
import {ProductService} from "../productList/productService"
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: product[] =  this.ProductService.getProducts();
  constructor(private httpClient: HttpClient,private ProductService:ProductService) {
  }

  ngOnInit() {
    this.ProductService.getProducts();
  }

}

