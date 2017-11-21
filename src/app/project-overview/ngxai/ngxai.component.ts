import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngxai',
  templateUrl: './ngxai.component.html',
  styleUrls: ['../project/project.component.scss', '../project/project-mobile.component.scss']
})
export class NgxaiComponent implements OnInit {
  onlyImagePath: string;

  constructor() {
    this.onlyImagePath = '/assets/img/projects/ai3.jpg';
  }

  ngOnInit() {
  }

}
