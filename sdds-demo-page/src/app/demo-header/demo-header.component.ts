import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActionsSubject } from '@ngrx/store';
import { CartItem } from '../store/models/cartItem.model';
import { AppState } from '../store/models/state.model';

import { createSelector } from '@ngrx/store';
import { AddItemAction } from '../store/actions/cart.action';

@Component({
  selector: 'demo-header',
  templateUrl: './demo-header.component.html',
  styleUrls: ['./demo-header.component.scss']
})
export class DemoHeaderComponent implements OnInit {
  showBadge = false;
  cartItems$: Observable<Array<CartItem>>;
  @Output() eventFromHeader = new EventEmitter<any>();

  constructor(private store: Store<AppState>, private actionListener$: ActionsSubject) {
  }

  openMobileMenu(): void {
    this.eventFromHeader.emit({
      type: 'showMobileMenu',
      value: true,
    });
  }

  ngOnInit() {
    this.store.select((store) => store.cartItems).subscribe(cartItems => {
      this.showBadge = cartItems.length > 0;
      console.log(this.showBadge);
    });
  }

}
