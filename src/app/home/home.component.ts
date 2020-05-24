import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo.service';
import { Photo } from '../classes/Photo';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfPhotos: Array<Photo> = [];

  firstPic = ''
  secPic = ''
  thrPic = ''

  firstCat = '';
  secCat = '';
  thrCat = ''

  

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.getLastThree();;
  }


  getLastThree() {
    this.photoService.getLastThree().subscribe(data => {
      this.listOfPhotos =  JSON.parse(data) as Array<Photo>

      this.firstPic = this.listOfPhotos[0].url;
      this.secPic = this.listOfPhotos[1].url;
      this.thrPic = this.listOfPhotos[2].url;

      this.firstCat =  this.listOfPhotos[0].category.title;
      this.secCat =  this.listOfPhotos[1].category.title;
      this.thrCat =  this.listOfPhotos[2].category.title;
    })
  }


  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  }


}
