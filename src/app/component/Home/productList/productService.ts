import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { product } from "../../../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private productUrl = 'assets/products/products.json';
  private productUrl = 'assets/data.json';
 products: any = [];
  constructor(private http: HttpClient) {
  }

  getProducts(): product[]{
    this.http.get("assets/data.json").subscribe(data => {
      console.log(data);
      this.products = data;
    })
    return this.products
  }

  // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  getProduct(id: number): product  {
    return this.products[this.getSelectedIndex(id)];
  }
  private getSelectedIndex(id: number) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

}
