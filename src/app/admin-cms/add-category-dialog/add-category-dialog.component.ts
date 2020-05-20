import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {

  constructor(public categoryService:CategoryService) { }

  ngOnInit() {
  }

  addCategoryForm = new FormGroup({
    title : new FormControl("",Validators.required)
  })

  add(){
    let category = {title:this.addCategoryForm.get("title").value}
    this.categoryService.add(category).subscribe(data=>{
      console.log(data);
      
    })
  }

}
