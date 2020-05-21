import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-photo-preview-dialog',
  templateUrl: './photo-preview-dialog.component.html',
  styleUrls: ['./photo-preview-dialog.component.css']
})
export class PhotoPreviewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
