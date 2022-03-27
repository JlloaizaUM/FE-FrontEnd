import { Injectable } from "@angular/core";
import { Restaurant } from "../../model/restaurant";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "environments/environment";


@Injectable({   providedIn: 'root' })

export class FeaturedRestaurantApiService {
  private APIurl = `http://${environment.back_url}:${environment.back_port}/restaurants`;

  constructor(private http: HttpClient) {}

  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.APIurl);
  }
}