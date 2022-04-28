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

  constructor() {

  }

  onCloseBanner() {
    this.hideBanner = true;
  }
}
