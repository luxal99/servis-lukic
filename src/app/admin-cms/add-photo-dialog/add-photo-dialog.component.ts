import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from "../../service/category.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSlideToggle } from '@angular/material';
import { Photo } from "src/app/classes/Photo";
import { AngularFireStorage } from 'angularfire2/storage';
import { PhotoService } from 'src/app/service/photo.service';
@Component({
  selector: 'app-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.css']
})
export class AddPhotoDialogComponent implements OnInit {

  listOfCategory: any = [];
  listOfTestimonialImage: Array<Photo> = [];
  fileUploadList: Array<File> = [];
  isReady = 'Nije spremno';

  @ViewChild('toggle', { static: false }) toggle: MatSlideToggle;


  percentage = 0;

  photoForm = new FormGroup({
    category: new FormControl("", Validators.required),
    isUploaded: new FormControl("", Validators.required)
  })

  constructor(public categoryService: CategoryService, public photoService: PhotoService, private _snackBar: MatSnackBar, public afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.getAll()

  }

  addFiles(event) {

    for (let index = 0; index < event.length; index++) {
      if (event[index].size / 1000 > 500) {
        this.openSnackBar("Prevelik fajl", "DONE");
      } else {

        const element = event[index];
        this.fileUploadList.push(element);
      }
    }
  }

  deleteAttachment(index) {
    this.fileUploadList.splice(index, 1);
  }

  getAll() {
    this.categoryService.getAll().subscribe(data => {
      this.listOfCategory = data;
    })
  }



  uploadFiles() {

    for (const file of this.fileUploadList) {
      this.afStorage.upload(file.name, file).percentageChanges().subscribe(data => {
        this.percentage = data
      });
    }

    setTimeout(() => {

      for (const fileName of this.fileUploadList) {
        const downloadUrl = this.afStorage.ref(fileName.name).getDownloadURL().subscribe(data => {
          var ti = new Photo()
          ti.fileName = fileName.name;
          ti.url = data;
          this.listOfTestimonialImage.push(ti);

          this.toggle.writeValue(true);
          this.isReady = 'Spremno je';
          document.getElementById('toggle').style.color = "#4BB543";

        });
      }
    }, 1500 * this.fileUploadList.length)

  }

  savePhoto() {
    for (const image of this.listOfTestimonialImage) {
      image.category = this.photoForm.get('category').value;

      console.log(image);
      this.photoService.save(image).subscribe(data => {
        console.log(data);

      })
    }
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });

  }

}
