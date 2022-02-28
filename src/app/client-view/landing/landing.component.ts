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
                  {img:"https://firebasestorage.googleapis.com/v0/b/bonapettit-app.appspot.com/o/6ClOZsipScOpDMG8GzdW%2Flogo-frisby-1024x1024.jpg?alt=media&token=2a840cae-5844-4056-8b99-7fb675cbb435",name:"Frisby",   url:"#restaurant/1",backg:"https://firebasestorage.googleapis.com/v0/b/bonapettit-app.appspot.com/o/6ClOZsipScOpDMG8GzdW%2Fpollo_frisby.jpg?alt=media&token=1d2c6aa8-99ba-481e-84cd-838ff5825d66"},
                  {img:"./assets/img/torigallo.jpeg",           name:"Torigallo",url:"#restaurant/2",backg:"./assets/img/chorizo.jpeg"}];
    this.part_num = 15;
  }
  
}
