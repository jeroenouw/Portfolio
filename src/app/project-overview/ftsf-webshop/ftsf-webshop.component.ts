import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ftsf-webshop',
  templateUrl: './ftsf-webshop.component.html',
  styleUrls: ['../project/project.component.scss', '../project/project-mobile.component.scss']
})
export class FtsfWebshopComponent implements OnInit {
  bigImagePath: string;
  smallImagePathFirst: string;
  smallImagePathSecond: string;

  constructor() {
    this.bigImagePath = '/assets/img/projects/ftsf3.png';
    this.smallImagePathFirst = '/assets/img/projects/ftsf2.png';
    this.smallImagePathSecond = '/assets/img/projects/ftsf1.png';
  }

  ngOnInit() {
  }

}
