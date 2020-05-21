import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) { }

  getAll(){
    return this.http.get('/admin/category',{responseType:'json'})
  }

  add(category){
    return this.http.post("/admin/category",category,{responseType:'text'})
  }

  delete(_id){
    return this.http.delete("/admin/category/"+_id,{responseType:'text'})
  }

  
}
