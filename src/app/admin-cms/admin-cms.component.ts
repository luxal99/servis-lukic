import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoDialogComponent } from './add-photo-dialog/add-photo-dialog.component';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-admin-cms',
  templateUrl: './admin-cms.component.html',
  styleUrls: ['./admin-cms.component.css']
})
export class AdminCmsComponent implements OnInit {

  listOfPhotos: any = [];
  constructor(public dialog: MatDialog, public photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photoService.getAll().subscribe(data => {
      this.listOfPhotos = data;
      console.log(data);
      
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPhotoDialogComponent, {
      width: 'auto',
    });
  }


  photoColumns: string[] = ['title', 'category', 'option']

}
