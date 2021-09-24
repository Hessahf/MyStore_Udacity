import { Component } from '@angular/core';
import { product } from 'src/app/models/product';
import {ProductService} from "../app/component/Home/productList/productService";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: product[] =  this.ProductService.getProducts();
  title = 'Mystore';
  constructor(private httpClient: HttpClient,private ProductService:ProductService) {
  }
  ngOnInit() {
    this.products=this.ProductService.getProducts();
  }
}
