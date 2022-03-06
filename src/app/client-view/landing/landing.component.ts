import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  part_num: number;

  constructor() {
    
  }

  ngOnInit() {
    this.part_num = 0;
  }

  setNum(num: any) {
    this.part_num = num;
  }
}
