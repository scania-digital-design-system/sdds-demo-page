import { Component } from '@angular/core';

/*import { DemoHeaderComponent } from './demo-header/demo-header.component';
import { DemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';*/

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
