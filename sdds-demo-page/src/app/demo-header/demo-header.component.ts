import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-header',
  templateUrl: './demo-header.component.html',
  styleUrls: ['./demo-header.component.scss']
})
export class DemoHeaderComponent implements OnInit {
  showBadge = false;

  constructor() { }

  ngOnInit(): void {
  }

}
