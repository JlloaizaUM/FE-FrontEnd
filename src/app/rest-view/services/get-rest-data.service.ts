import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetRestDataService {
  private APIurl = `http://${environment.back_url}:${environment.back_port}`

  constructor(private http: HttpClient) {}

  public getRestaurantData( query:string ){
    let httpOptions = {
      params: new HttpParams()
        .append("user_url", query)
    };
    return this.http.get(`${this.APIurl}/restaurant/data`, httpOptions).toPromise();
  }
}
