import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'demo-sidebar',
  templateUrl: './demo-sidebar.component.html',
  styleUrls: ['./demo-sidebar.component.scss']
})
export class DemoSidebarComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
