import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  private baseUrl = `http://${environment.back_url}:${environment.back_port}/upload-img/`

  constructor(private http: HttpClient) { }

  upload(file: File, pageID: string): Promise<any> {
    let formData: FormData = new FormData();
    formData.append('image', file, file.name);

    let httpOptions = {
      headers: new HttpHeaders(
        {
          'Accept':'application/json',
          'userid':pageID
        }
      )
    };

    return this.http.post<any>(this.baseUrl, formData, httpOptions).toPromise()
  }
}
