import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoDialogComponent } from './add-photo-dialog/add-photo-dialog.component';
import { PhotoService } from '../service/photo.service';
import { PhotoPreviewDialogComponent } from "./photo-preview-dialog/photo-preview-dialog.component";
import { AngularFireStorage } from 'angularfire2/storage'
import { EditPhotoDialogComponent } from './edit-photo-dialog/edit-photo-dialog.component';
import { AuthService } from '../service/auth.service';
import { auth } from 'firebase';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-cms',
  templateUrl: './admin-cms.component.html',
  styleUrls: ['./admin-cms.component.css']
})
export class AdminCmsComponent implements OnInit {

  listOfPhotos: any = [];
  constructor(public dialog: MatDialog,public router:Router, public photoService: PhotoService, public afStorage: AngularFireStorage,public authService:AuthService) { }

  ngOnInit() {
  this.auth()
    this.getPhotos();
  }

  auth(){
    const token = {token:localStorage.getItem("token")};
    this.authService.checkToken(token).subscribe(data=>{
     data !== true ? this.router.navigate(['/error']): this.router.navigate(['/panel'])
     
      
    })
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

    dialogRef.afterClosed().subscribe(result => {
      this.getPhotos();
    });
  }

  openEditPhotoDialog(photo): void {
    const dialogRef = this.dialog.open(EditPhotoDialogComponent, {
      width: 'auto',
      data: photo
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPhotos();
    });
  }


  photoColumns: string[] = ['title', 'category', 'option']

}
