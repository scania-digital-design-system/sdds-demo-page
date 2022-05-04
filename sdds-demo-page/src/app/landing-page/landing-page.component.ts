import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddItemAction } from '../store/actions/cart.action';
import { AppState } from '../store/models/state.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  showToast = false

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { }

  addToCart(): void {
    this.showToast = true;

    this.store.dispatch(new AddItemAction(
      {
        id: "1337",
        name: "Example item"
      }
    ));
  }

  closeToast(): void {
    this.showToast = false;
  }

}
