import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-footer',
  templateUrl: './demo-footer.component.html',
  styleUrls: ['./demo-footer.component.scss']
})
export class DemoFooterComponent implements OnInit {
  toggle: boolean[] = [false, false, false, false];

  constructor() { }

  ngOnInit(): void { }

  toggleFooterColumn(index) {
    this.toggle[index] = !this.toggle[index];
  }

  removeFocus($event) {
    $event.srcElement.blur();
  }

}
