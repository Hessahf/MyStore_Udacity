import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/Home/home.component';
import { CartComponent } from './component/cart/cart.component';
import{CheckoutComponent} from "./component/cart/billingform/checkout/checkout.component";
import {ProductDetailsComponent}from "./component/Home/productList/product-item/product-details/product-details.component";

const routes: Routes =[
   // {path:"", component: AppComponent},
  {path:"",component:HomeComponent},
  {path:"Cart",component:CartComponent},
  {path:"Details/:productId",component:ProductDetailsComponent},
  {path:"checkout",component:CheckoutComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
