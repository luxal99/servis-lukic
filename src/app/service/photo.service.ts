import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends AbstractService{

  constructor(public http: HttpClient) {
    super(http);
    super.route = '/admin/';
    super.path = 'photo';
   }

  countPhotoByCategory(){
    return this.http.get("/admin/category/analytics",{responseType:'json'});
  }


  getLastThree() {
    return this.http.get("/admin/photo/three", { responseType: 'json' });
  }

}
