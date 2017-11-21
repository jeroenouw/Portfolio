import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ftsf-webshop',
  templateUrl: './ftsf-webshop.component.html',
  styleUrls: ['../project/project.component.scss', '../project/project-mobile.component.scss']
})
export class FtsfWebshopComponent implements OnInit {
  onlyImagePath: string;

  constructor() {
    this.onlyImagePath = '/assets/img/projects/ftsf5.jpg';
  }

  ngOnInit() {
  }

}
