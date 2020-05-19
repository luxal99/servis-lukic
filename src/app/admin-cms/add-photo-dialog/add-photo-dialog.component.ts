import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../service/category.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.css']
})
export class AddPhotoDialogComponent implements OnInit {

  listOfCategory:any=[];
  files: any = [];
  fileUploadList: Array<File> = [];

  photoForm = new FormGroup({
  
    category: new FormControl("",Validators.required)
  })

  constructor(public categoryService: CategoryService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAll()

  }

  addFiles(event) {
    
    for (let index = 0; index < event.length; index++) {
      if (event[index].size / 1000 > 500) {
        this.openSnackBar("Prevelik fajl", "DONE");
      } else {

        const element = event[index]
        this.files.push(element.name)
        this.fileUploadList.push(element);
      }
    }
  }

  getAll() {
    this.categoryService.getAll().subscribe(data=>{
      this.listOfCategory = data;
    })
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });

  }

}
