import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuning',
  templateUrl: './tuning.component.html',
  styleUrls: ['./tuning.component.css']
})
export class TuningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }


}
