import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/img/DSC_0006_Edit.jpg'; }

  ngOnInit() {
  }

}
