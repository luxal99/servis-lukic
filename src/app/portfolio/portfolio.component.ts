import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  listOfCategory: any = [];
  listOfPhotos: any = [];

  constructor(public categoryService: CategoryService, public photoService: PhotoService) { }

  ngOnInit() {
    this.getCategories();
    this.getPhotos();
    window.scrollTo(0,0);
  }

  getCategories() {
    this.categoryService.getAll().subscribe(data => {
      this.listOfCategory = data;
    })
  }

  getPhotos() {
    this.photoService.getAll().subscribe(data => {
      this.listOfPhotos = data;
    })

    return this.listOfPhotos
  }

  sortList(category) {
    
    this.getPhotos()

    setTimeout(() => {
      let sorted = this.listOfPhotos.filter(item => item.category.title === category);
      this.listOfPhotos = sorted;
    }, 200);
  }


  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  }

}
