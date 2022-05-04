import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  handleEvent($event) {
    switch($event.type) {
      case "showMobileMenu":
        this.mobileMenuOpen = $event.value;
      break;
    }
  }

  onCloseBanner() {
    this.hideBanner = true;
    
    // hack to refresh tooltips positions
    window.scrollTo(0, 1);
  }
}
