import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'demo-sidebar',
  templateUrl: './demo-sidebar.component.html',
  styleUrls: ['./demo-sidebar.component.scss']
})
export class DemoSidebarComponent implements OnInit {
  @Input() mobileMenuOpen = false;
  menuItems = [
    { label: "Home",
      route: "/home" 
    },
    { label: "Cart",
      route: "/cart" 
    },
    { label: "Deliveries",
      route: "/deliveries" 
    },    
  ];
  @Output() eventFromSidebar = new EventEmitter<any>();

  constructor() { }

  closeMobileMenu() {
    this.eventFromSidebar.emit({
      type: 'showMobileMenu',
      value: false,
    });
  }

  ngOnInit(): void {
  }

}
