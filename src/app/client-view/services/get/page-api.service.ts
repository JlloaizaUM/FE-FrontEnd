import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestaurantPage } from "app/client-view/model/restaurant-page";


@Injectable({   providedIn: 'root' })

export class PageApiService {
  private APIurl = "http://localhost:3000/restaurant/";

  constructor(private http: HttpClient) {}

  public getRestaurantData( path:string ) {
    return this.http.get((this.APIurl+path));
  }
}
