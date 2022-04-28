import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideBanner = false
  mobileMenuOpen = false

  constructor() {

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
