import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";

@Injectable({   providedIn: 'root' })

export class PageApiService {
  private APIurl = `http://${environment.back_url}:${environment.back_port}/restaurant/`

  constructor(private http: HttpClient) {}

  public getRestaurantData( path:string ) {
    return this.http.get(this.APIurl+path);
  }
}
