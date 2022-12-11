import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/layouts/cart/cart.component';
import { CheckoutComponent } from './components/layouts/checkout/checkout.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { ShopDetailComponent } from './components/layouts/shop-detail/shop-detail.component';
import { ShopComponent } from './components/layouts/shop/shop.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'detail', component: ShopDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
