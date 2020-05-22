import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends AbstractService{

  constructor(public http:HttpClient) {
    super(http,'/user/','message');
  }

  getInbox(){
    return this.http.get("/admin/message",{responseType:'json'})
  }
}
