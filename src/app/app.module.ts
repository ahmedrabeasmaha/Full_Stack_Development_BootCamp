import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ShopComponent } from './components/layouts/shop/shop.component';
import { CategoryComponent } from './components/category/category.component';
import { ShopDetailComponent } from './components/layouts/shop-detail/shop-detail.component';
import { CheckoutComponent } from './components/layouts/checkout/checkout.component';
import { CartComponent } from './components/layouts/cart/cart.component';
import { ContactComponent } from './components/layouts/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    CategoriesComponent,
    CategoryComponent,
    ShopDetailComponent,
    CheckoutComponent,
    CartComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
