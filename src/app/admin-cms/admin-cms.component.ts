import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoDialogComponent } from './add-photo-dialog/add-photo-dialog.component';
import { PhotoService } from '../service/photo.service';
import { PhotoPreviewDialogComponent } from "./photo-preview-dialog/photo-preview-dialog.component";
import { AngularFireStorage } from 'angularfire2/storage'

@Component({
  selector: 'app-admin-cms',
  templateUrl: './admin-cms.component.html',
  styleUrls: ['./admin-cms.component.css']
})
export class AdminCmsComponent implements OnInit {

  listOfPhotos: any = [];
  constructor(public dialog: MatDialog, public photoService: PhotoService, public afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.getPhotos();
  }

  deletePhoto(_id, fileName) {
    this.photoService.delete(_id).subscribe(data => {
    })
    this.afStorage.ref(fileName).delete().subscribe(data => {

    })
    this.getPhotos();
  }

  getPhotos() {
    this.photoService.getAll().subscribe(data => {
      this.listOfPhotos = data;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPhotoDialogComponent, {
      width: 'auto'
    });
  }

  openPhotoPreviewDialog(image): void {
    const dialogRef = this.dialog.open(PhotoPreviewDialogComponent, {
      width: 'auto',
      data: image
    });
  }


  photoColumns: string[] = ['title', 'category', 'option']

}
