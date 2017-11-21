import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngxmatfire',
  templateUrl: './ngxmatfire.component.html',
  styleUrls: ['../project/project.component.scss', '../project/project-mobile.component.scss']
})
export class NgxmatfireComponent implements OnInit {
  onlyImagePath: string;

  constructor() {
    this.onlyImagePath = '/assets/img/projects/milm1.jpg';
  }

  ngOnInit() {
  }

}
