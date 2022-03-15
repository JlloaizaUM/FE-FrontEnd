import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RegisterClientComponent } from 'app/auth-view/register-client/register-client.component';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {
  private APIurl = "http://192.168.1.5:3000/register-user";

  constructor(private http: HttpClient) { }

  //registerByEmail(RegisterClientComponent):Observable<RegisterClientComponent>{
    //let direccion = this.APIurl + "/path"
    //return this.http.post.register();
  //}

  public postRegister(body: any) {
    return this.http.post(
      this.APIurl,
      body
    );
  }
}

