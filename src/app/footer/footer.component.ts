import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'src/app/classes/Message';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  messageForm = new FormGroup({
    full_name: new FormControl("", Validators.required),
    subject: new FormControl("", Validators.required),
    mail: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
  })

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  send() {

    var message = new Message();
    message.full_name = this.messageForm.get('full_name').value;
    message.mail = this.messageForm.get('mail').value;
    message.subject = this.messageForm.get('subject').value;
    message.message = this.messageForm.get('message').value;

    console.log(message);


    this.messageService.save(message).subscribe(data=>{
      console.log(data);
      
    })

  }

}
