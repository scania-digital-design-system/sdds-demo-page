import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DeliveriesPageComponent } from './deliveries-page/deliveries-page.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'deliveries', component: DeliveriesPageComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
