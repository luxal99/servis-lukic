import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { PhotoService } from '../service/photo.service';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  listOfCategory: any = [];
  listOfPhotos: any = [];

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 100,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }

  mobile: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 100,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }

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
