import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatePageService {

  private baseUrl = `http://${environment.back_url}:${environment.back_port}`;

  constructor(private http: HttpClient) { }

  updatePage(page:any): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept':'application/json',
        }
      )
    };
    return this.http.put(`${this.baseUrl}/restaurant/update`, page, httpOptions);
  }
}
