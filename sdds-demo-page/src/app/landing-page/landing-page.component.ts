import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() {
    console.log("landingPage constructor");
  }

  ngOnInit(): void {
    console.log("landingPage ngOnInit");
  }

}
