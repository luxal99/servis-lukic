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
import { MessageService } from '../service/message.service';
import { MailPreviewDialogComponent } from "./mail-preview-dialog/mail-preview-dialog.component";

@Component({
  selector: 'app-admin-cms',
  templateUrl: './admin-cms.component.html',
  styleUrls: ['./admin-cms.component.css']
})
export class AdminCmsComponent implements OnInit {

  listOfPhotos: any = [];
  listOfMessages: any = [];
  listOfMenuOptions: Array<any> =
    [
      { id: 'photo', title: 'Photos', div: 'photo-div', },
      { id: 'message', title: 'Messages', div: 'message-div', }
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

  constructor(public dialog: MatDialog, public router: Router,
    public photoService: PhotoService, public afStorage: AngularFireStorage,
    public authService: AuthService, public messageService: MessageService) { }

  ngOnInit() {
    this.auth()
    this.getPhotos();
    this.getMessages();
    this.getBarChartData();
    this.btnPropertyDefault();
  }



  auth() {
    const token = { token: localStorage.getItem("token") };
    this.authService.checkToken(token).subscribe(data => {
      data !== true ? this.router.navigate(['/error']) : this.router.navigate(['/panel'])


    })
  }

  btnPropertyDefault() {
    setTimeout(() => {
      document.getElementById('photo').style.backgroundColor = '#222';
      document.getElementById('photo').style.color = '#ffe600';
    }, 1);
  }


  deletePhoto(_id, fileName) {
    this.photoService.delete(_id).subscribe(data => {
    })
    this.afStorage.ref(fileName).delete().subscribe(data => {

    })
    this.getPhotos();
  }

  deleteMessage(_id){
    this.messageService.delete(_id).subscribe(data=>{
      this.getMessages();
    })
  }

  getPhotos() {
    this.photoService.getAll().subscribe(data => {
      this.listOfPhotos = data;
    })
  }

  getElementId($event) {

    console.log($event.path[1].id);

    var showItem = this.listOfMenuOptions.filter(item => item.id === $event.path[1].id);


    setTimeout(() => {
      var hiddenItems = this.listOfMenuOptions.filter(item => item.id !== $event.path[1].id);
      hiddenItems.forEach(item => {
        document.getElementById(item.div).style.display = 'none';
        document.getElementById(item.id).style.backgroundColor = '';
        document.getElementById(item.id).style.color = '';
      })
    }, 200);

    setTimeout(() => {
      document.getElementById(showItem[0].div).style.display = 'block';
      document.getElementById(showItem[0].id).style.backgroundColor = '#222';
      document.getElementById(showItem[0].id).style.color = '#ffe600';
    }, 300);
  }


  getMessages() {
    this.messageService.getAll().subscribe(data => {
      this.listOfMessages = data;
    })
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

  logout() {
    localStorage.removeItem("token");
    location.reload();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPhotoDialogComponent, {
      width: 'auto',
      height:'65%'
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

  openMailPreviewDialog(mail): void {
    const dialogRef = this.dialog.open(MailPreviewDialogComponent, {
      width: 'auto',
      data: mail
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
  messageColumns: string[] = ['fullanme', 'subject', 'date', 'option']

}
