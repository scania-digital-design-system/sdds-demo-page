import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoHeaderComponent } from './demo-header/demo-header.component';
import { DemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DeliveriesPageComponent } from './deliveries-page/deliveries-page.component';
import { DemoFooterComponent } from './demo-footer/demo-footer.component';

import { CartReducer } from './store/reducers/cart.reducer';

// added ShareButtonModule
import { ShareButtonModule } from 'ngx-sharebuttons/button';

@NgModule({
  declarations: [
    AppComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
    MainContentComponent,
    LandingPageComponent,
    CartPageComponent,
    DeliveriesPageComponent,
    DemoFooterComponent,    
  ],
  imports: [
    // added ShareButtonModule
    ShareButtonModule,

    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      cartItems: CartReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
