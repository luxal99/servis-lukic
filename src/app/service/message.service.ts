import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends AbstractService{

  constructor(public http:HttpClient) {
    super(http,'/admin/','message');
  }

  post(message){
    return this.http.post("/admin/message",message,{responseType:'text'})
  }
}
