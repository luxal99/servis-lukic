import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'src/app/classes/Message';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  messageForm = new FormGroup({
    full_name: new FormControl("", Validators.required),
    mail: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
  })

  constructor(public messageService: MessageService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  send() {

    var message = new Message();
    message.full_name = this.messageForm.get('full_name').value;
    message.mail = this.messageForm.get('mail').value;
    message.message = this.messageForm.get('message').value;

    this.messageService.save(message).subscribe(data => {
      this.openSnackBar("Uspesno poslata poruka","DONE")

    })

  }

}
