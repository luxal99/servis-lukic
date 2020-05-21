import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from "./abstract.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends AbstractService{

  constructor(public http:HttpClient) {
    super(http);
    super.route = '/admin/';
    super.path = 'category';
  }
}
