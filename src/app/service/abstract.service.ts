import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  public route = ''
  public path = ''

  constructor(public http: HttpClient) { }


  save(object) {
    return this.http.post(this.route + this.path, object, { responseType: 'text' })
  }

  getAll() {
    return this.http.get(this.route + this.path, { responseType: 'json' })
  }

  update(object) {
    return this.http.put(this.route + this.path, object, { responseType: 'text' })
  }

  delete(_id) {
    return this.http.delete(this.route + this.path + '/' + _id, { responseType: 'text' })
  }

}
