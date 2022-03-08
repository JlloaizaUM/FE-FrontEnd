import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {
  private APIurl = "http://192.168.1.5:3000/register-user";

  constructor(private http: HttpClient) { }

  public postRegister(body: any) {
    return this.http.post(
      this.APIurl,
      body
    );
  }
}

