import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  private baseUrl = "".concat(environment.back_url, ":", environment.back_port);

  constructor(private http: HttpClient) { }

  upload(file: File, pageID:string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    
    const req = new HttpRequest('POST', this.baseUrl.concat('/upload-img'), formData, {
      headers: new HttpHeaders({userid: pageID}),
      reportProgress: true,
      responseType: 'json',
    });
    console.log(this.baseUrl.concat('/upload-img'));
    this.http.post(this.baseUrl.concat('/upload-img'), formData, {
      headers: new HttpHeaders({userid: pageID}),
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

}
