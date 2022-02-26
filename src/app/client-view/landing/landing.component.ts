import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  parameters;

  constructor() {
    this.getParameters();
  }

  ngOnInit(): void {
  }

  getParameters(){
    this.parameters = [15, "./assets/img/favicon-512.png", "McDonalds"];
  }
}
