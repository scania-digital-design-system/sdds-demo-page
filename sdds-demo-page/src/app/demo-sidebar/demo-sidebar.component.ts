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
    { label: "Item 1",
      route: "/page-1" 
    },
    { label: "Item 2",
      route: "/page-2" 
    },
    { label: "Item 3",
      route: "/page-3" 
    },
    { label: "Item 4",
      route: "/page-4" 
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
