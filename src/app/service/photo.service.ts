import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(public http: HttpClient) { }

  save(photo) {
    return this.http.post("/admin/photo", photo, { responseType: 'text' })
  }

  getAll() {
    return this.http.get("/admin/photo", { responseType: 'json' });
  }


}
