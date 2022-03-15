import { Injectable } from "@angular/core";
import { Restaurant } from "../../model/restaurant";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({   providedIn: 'root' })

export class FeaturedRestaurantApiService {
  private APIurl = "http://192.168.1.5:3000/restaurants";

  constructor(private http: HttpClient) {}

  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.APIurl);
  }
}