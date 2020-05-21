import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoDialogComponent } from './add-photo-dialog/add-photo-dialog.component';
import { PhotoService } from '../service/photo.service';
import { PhotoPreviewDialogComponent } from "./photo-preview-dialog/photo-preview-dialog.component";
import { AngularFireStorage } from 'angularfire2/storage'
import { EditPhotoDialogComponent } from './edit-photo-dialog/edit-photo-dialog.component';
import { AuthService } from '../service/auth.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Router } from '@angular/router';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-admin-cms',
  templateUrl: './admin-cms.component.html',
  styleUrls: ['./admin-cms.component.css']
})
export class AdminCmsComponent implements OnInit {

  listOfPhotos: any = [];
  listOfMenuOptions: Array<any> =
    [
      { id: 'photo', title: 'Photos', div: 'photo-div' },
      { id: 'message', title: 'Messages', div: 'message-div' }
    ]

  barChartLegend = true;
  barChartPlugins = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  taskGraphList: any = [];

  barChartData: ChartDataSets[] = [{ data: [], backgroundColor: ['#EC6B56', "#FFC154", "#47B39C"] }];
  barChartDataForUserId: ChartDataSets[] = [{ data: [], backgroundColor: ['#EC6B56', "#FFC154", "#47B39C"] }];

  constructor(public dialog: MatDialog, public router: Router, public photoService: PhotoService, public afStorage: AngularFireStorage, public authService: AuthService) { }

  ngOnInit() {
    this.auth()
    this.getPhotos();
    this.getBarChartData();
  }

  auth() {
    const token = { token: localStorage.getItem("token") };
    this.authService.checkToken(token).subscribe(data => {
      data !== true ? this.router.navigate(['/error']) : this.router.navigate(['/panel'])


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

  getElementId(event: Event) {
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
    

    let showItem = this.listOfMenuOptions.filter(item => item.id === elementId);
   setTimeout(() => {
    var hiddenItems = this.listOfMenuOptions.filter(item => item.id !== elementId);
    hiddenItems.forEach(item => {
      document.getElementById(item.div).style.display = 'none';
    })
   }, 100);

   setTimeout(() => {
    document.getElementById(showItem[0].div).style.display = 'block';

   }, 200);

    // do something with the id... 

  }

  getBarChartData() {

    this.barChartData[0].data = [];
    this.taskGraphList = [];
    this.barChartLabels = [];

    var empty = 0;

    this.photoService.countPhotoByCategory().subscribe(data => {
      this.taskGraphList = data;
      this.taskGraphList.forEach(element => {
        this.barChartLabels.push(element.label);
        this.barChartData[0].data.push(element.value)

      });

      this.barChartData[0].data.push(empty)
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

  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, {
      width: 'auto'
    });
  }


  photoColumns: string[] = ['title', 'category', 'option']

}
