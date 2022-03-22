import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadDishService {
  private baseUrl = `http://${environment.back_url}:${environment.back_port}`;

  constructor(private http: HttpClient) {  }

  uploadDish(dish:any, userid:string, cat:string): Observable<any>{
    let body = {dish, userid, cat};
    
    console.log(`${this.baseUrl}/upload-dish`);
    console.log(body);
    let httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept':'application/json',
        }
      )
    };
    return this.http.post(`${this.baseUrl}/upload-dish`, body, httpOptions);
  }

  updateDish(dish:any, userid:string): Observable<any>{
    let body = {dish, userid};
    console.log(`${this.baseUrl}/update-dish`);
    let httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept':'application/json',
        }
      )
    };
    return this.http.put(`${this.baseUrl}/update-dish`, body, httpOptions);
  }
}
