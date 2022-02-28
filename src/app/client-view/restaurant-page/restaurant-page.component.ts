import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})

export class RestaurantPageComponent implements OnInit {

  cards: any;
  restaurant: any;

  constructor(private route: ActivatedRoute) {
    /*
    {img:"./assets/img/favicon-512.png",name:"McDonalds",url:"#restaurant/0",backg:"./assets/img/mcdonaldsfotoprincipal.jpg"}
    
    */
    this.cards = [{img:"./assets/img/favicon-512.png",          name:"McDonalds",url:"#restaurant/0",backg:"./assets/img/mcdonaldsfotoprincipal.jpg"}, 
                  {img:"./assets/img/logo-frisby-1024x1024.jpg",name:"Frisby",   url:"#restaurant/1",backg:"./assets/img/pollo_frisby.jpg"},
                  {img:"./assets/img/torigallo.jpeg",           name:"Torigallo",url:"#restaurant/2",backg:"./assets/img/chorizo.jpeg"}];
   }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    let id = routeParams.get('restaurantId');

    this.restaurant = this.cards[id];
  }

}
