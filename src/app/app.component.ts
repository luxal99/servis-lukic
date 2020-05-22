import { Component } from '@angular/core';
import * as AOS from 'aos'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-lukic';

  constructor(private spinner: NgxSpinnerService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    AOS.init();
    this.loader()
  }

  loader(){
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
      document.getElementById('content').style.display='block';
    }, 1000);
  }
}
