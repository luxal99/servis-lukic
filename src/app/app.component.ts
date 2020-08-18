import { Component } from '@angular/core';
import * as AOS from 'aos'
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-lukic';

  constructor() {

  }
  ngOnInit(): void {
    AOS.init();
  }

}
