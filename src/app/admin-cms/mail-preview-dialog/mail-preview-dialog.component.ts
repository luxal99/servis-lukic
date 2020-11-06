import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-mail-preview-dialog',
  templateUrl: './mail-preview-dialog.component.html',
  styleUrls: ['./mail-preview-dialog.component.css']
})
export class MailPreviewDialogComponent implements OnInit {

  public Editor = ClassicEditor;

  @ViewChild('editor', { static: false }) editor: CKEditorComponent;

  messageForm = new FormGroup({
    mail: new FormControl(this.data.mail,Validators.required),
    subject : new FormControl(this.data.subject,Validators.required)
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  send(){
    
  }


}
