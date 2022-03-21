import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteDishService {
  private baseUrl = `http://${environment.back_url}:${environment.back_port}`;

  constructor(private http: HttpClient) { }

  deleteDish(dish: any, userid: string): Observable<any> {
    let body = { dish, userid };
    console.log(`${this.baseUrl}/delete-dish`);
    let httpOptions = {
      params: new HttpParams()
        .append("userid", userid)
        .append("cat", dish.cat)
        .append("id", dish.id)
    };

    console.log(httpOptions);

    return this.http.delete(`${this.baseUrl}/delete-dish`, httpOptions);
  }
}
