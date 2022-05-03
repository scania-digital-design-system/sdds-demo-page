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

  constructor(private store: Store<AppState>) {
    console.log("landingPage constructor");
  }

  ngOnInit(): void {
    console.log("landingPage ngOnInit");
  }

  addToCart(): void {
    this.showToast = true;

    console.log('dispatching shit to store');

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
