import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoDialogComponent } from './add-photo-dialog/add-photo-dialog.component';

@Component({
  selector: 'app-admin-cms',
  templateUrl: './admin-cms.component.html',
  styleUrls: ['./admin-cms.component.css']
})
export class AdminCmsComponent implements OnInit {

  listOfPhotos :any=[];
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPhotoDialogComponent, {
      width: 'auto',
    });
  }


  photoColumns:string[]=['title','option']

}
