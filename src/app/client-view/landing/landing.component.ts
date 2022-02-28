import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  cards: any;
  part_num: number;

  constructor() {
    this.getParameters();
  }

  ngOnInit(): void {
  }

  getParameters(){
    this.cards = [{img:"./assets/img/favicon-512.png",          name:"McDonalds",url:"#restaurant/0",backg:"./assets/img/mcdonaldsfotoprincipal.jpg"}, 
                  {img:"./assets/img/logo-frisby-1024x1024.jpg",name:"Frisby",   url:"#restaurant/1",backg:"./assets/img/pollo_frisby.jpg"},
                  {img:"./assets/img/torigallo.jpeg",           name:"Torigallo",url:"#restaurant/2",backg:"./assets/img/chorizo.jpeg"}];
    this.part_num = 15;
  }
}
