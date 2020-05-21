import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfPhotos: any = [];

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.getLastThree();
  }

  getLastThree() {
    this.photoService.getLastThree().subscribe(data => {
      this.listOfPhotos = data
      console.log(this.listOfPhotos);
      
    })
  }

}
