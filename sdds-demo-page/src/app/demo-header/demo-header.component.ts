import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'demo-header',
  templateUrl: './demo-header.component.html',
  styleUrls: ['./demo-header.component.scss']
})
export class DemoHeaderComponent implements OnInit {
  showBadge = false;
  @Output() eventFromHeader = new EventEmitter<any>();

  constructor() { }

  openMobileMenu(): void {
    this.eventFromHeader.emit({
      type: 'showMobileMenu',
      value: true,
    });
  }

  ngOnInit(): void {
  }

}
