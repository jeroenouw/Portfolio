import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competa-milman',
  templateUrl: './competa-milman.component.html',
  styleUrls: ['../project/project.component.scss', '../project/project-mobile.component.scss']
})
export class CompetaMilmanComponent implements OnInit {
  bigImagePath: string;
  smallImagePathFirst: string;
  smallImagePathSecond: string;

  constructor() {
    this.bigImagePath = '/assets/img/projects/milm1.png';
    this.smallImagePathFirst = '/assets/img/projects/milm2.png';
    this.smallImagePathSecond = '/assets/img/projects/milm3.png';
  }

  ngOnInit() {
  }

}
