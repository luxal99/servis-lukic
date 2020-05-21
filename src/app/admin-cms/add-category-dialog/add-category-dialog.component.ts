import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {

  listOfCategory: any = [];

  constructor(public categoryService: CategoryService) { }

  ngOnInit() {
    this.get();
  }

  addCategoryForm = new FormGroup({
    title: new FormControl("", Validators.required)
  })

  add() {
    let category = { title: this.addCategoryForm.get("title").value }
    this.categoryService.save(category).subscribe(data => {
      console.log(data);
    })
  }

  get() {
    this.categoryService.getAll().subscribe(data => {
      this.listOfCategory = data;
    })
  }

  delete(_id){
    this.categoryService.delete(_id).subscribe(data=>{
      console.log(data);
      
    })
  }


  categoryColumns: string[] = ['title', 'option']

}
