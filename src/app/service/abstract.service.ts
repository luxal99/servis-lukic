import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  public route = ''

  constructor(public http: HttpClient) { }


  save(object) {
    return this.http.post("/admin/" + this.route, object, { responseType: 'text' })
  }

  getAll() {
    return this.http.get("/admin/" + this.route, { responseType: 'json' })
  }

  update(object) {
    return this.http.put("/admin/" + this.route, object, { responseType: 'text' })
  }

  delete(_id) {
    return this.http.delete("/admin/" + this.route + '/' + _id, { responseType: 'text' })
  }

}
