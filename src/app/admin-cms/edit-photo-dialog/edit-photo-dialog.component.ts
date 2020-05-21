import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PhotoService } from 'src/app/service/photo.service';

@Component({
  selector: 'app-edit-photo-dialog',
  templateUrl: './edit-photo-dialog.component.html',
  styleUrls: ['./edit-photo-dialog.component.css']
})
export class EditPhotoDialogComponent implements OnInit {

  listOfCategory : any = [];

  editPhotoForm = new FormGroup({
    description : new FormControl(this.data.description,Validators.required),
    category : new FormControl("",Validators.required)
  })
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public categoryService:CategoryService,public photoService:PhotoService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getAll().subscribe(data=>{
      this.listOfCategory = data;
    })
  }

  update(){
    let photo = 
    {
      _id:this.data._id,
      description:this.editPhotoForm.get("description").value,
      category:this.editPhotoForm.get("category").value,
      url:this.data.url
    }
    
    this.photoService.update(photo).subscribe(data=>{
      
    })
    
  }
}
