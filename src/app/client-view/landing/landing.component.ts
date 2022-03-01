import { Component, OnInit } from '@angular/core';


import { FeaturedRestaurantApiService } from "../services/get/featured-api.service";
import { Restaurant } from "../model/Restaurant";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  restaurants: Restaurant[];
  part_num: number;
  focus;
  focus1;
  constructor( private apiservice: FeaturedRestaurantApiService ) { }

  ngOnInit(){
    this.apiservice.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
      this.restaurants.forEach(item => {
        console.log(item);
      });
    });
  } 

  
  
}
