import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { NavBarComponent } from './component/shared/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { ProductListComponent } from './component/Home/productList/product-list.component';
import { ProductItemComponent } from './component/Home/productList/product-item/product-item.component';
import { CartComponent } from './component/cart/cart.component';
import { CartItemComponent } from './component/cart/cart-item/cart-item.component';
import { HomeComponent } from './component/Home/home.component';
import { BillingformComponent } from './component/cart/billingform/billingform.component';
import { ProductDetailsComponent } from './component/Home/productList/product-item/product-details/product-details.component';
import { CheckoutComponent } from './component/cart/billingform/checkout/checkout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    HomeComponent,
    BillingformComponent,
    ProductDetailsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
