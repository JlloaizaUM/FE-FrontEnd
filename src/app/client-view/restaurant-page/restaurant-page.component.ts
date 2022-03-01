import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantPage } from '../model/restaurant-page';
import { PageApiService } from '../services/get/page-api.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  page: any;

  constructor(private route: ActivatedRoute, private apiservice: PageApiService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    let path = routeParams.get('restaurantPath');
    this.apiservice.getRestaurantData(path).subscribe((restaurant) => {
      this.page = restaurant;
    });
    console.log(this.page);
  }

}
