import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FeaturedRestaurantApiService } from 'app/client-view/services/get/featured-api.service';
import { Restaurant } from "../../model/Restaurant";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  @Output() changeNumValueEvent = new EventEmitter();
  restaurants: Restaurant[];
  part_num: number;

  constructor(private apiservice: FeaturedRestaurantApiService) { }

  ngOnInit(): void {
    this.apiservice.getRestaurants().subscribe((restaurants: Restaurant[]) => {
      this.restaurants = restaurants;
    });
    this.part_num = 5;

    this.changeNumValueEvent.emit(this.part_num);
  }

}
