import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends AbstractService{

  constructor(public http:HttpClient) {
    super(http);
    super.route = '/user/';
    super.path = 'message';
  }
}
