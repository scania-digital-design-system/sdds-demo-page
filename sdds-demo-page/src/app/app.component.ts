import { Component, OnInit } from '@angular/core';
/* import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from './store/models/cartItem.model';
import { AppState } from './store/models/state.model';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hideBanner = false
  mobileMenuOpen = false
  // cartItems$: Observable<Array<CartItem>>;

  constructor(/*private store: Store<AppState>*/) {

  }

  ngOnInit(): void {
    // this.cartItems$ = this.store.select((store) => store.cartItems);
  }

  handleEvent($event) {
    console.log($event);
    switch($event.type) {
      case "showMobileMenu":
        this.mobileMenuOpen = $event.value;
      break;
    }
  }

  onCloseBanner() {
    this.hideBanner = true;
  }
}
