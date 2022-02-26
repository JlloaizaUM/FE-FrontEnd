import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  partner_number: number;
  img_url1: string;
  partner1: string;

  constructor() {
    this.partner_number = 0;
    this.img_url1 = "./assets/img/favicon-512.png";
    this.partner1 = "McDonalds"
  }

  ngOnInit(): void {
  }

}
