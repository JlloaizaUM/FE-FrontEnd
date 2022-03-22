import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "environments/environment";

@Injectable({   providedIn: 'root' })

export class PageApiService {
  private APIurl = `http://${environment.back_url}:${environment.back_port}/restaurant/get`

  constructor(private http: HttpClient) {}

  
  public getRestaurantData( query:string ) {
    let httpOptions = {
      params: new HttpParams()
        .append("user_url", query)
    };
    return this.http.get(this.APIurl, httpOptions);
  }
}
