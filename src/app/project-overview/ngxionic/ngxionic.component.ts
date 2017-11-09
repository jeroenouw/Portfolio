import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngxionic',
  templateUrl: './ngxionic.component.html',
  styleUrls: ['../project/project.component.scss', '../project/project-mobile.component.scss']
})
export class NgxionicComponent implements OnInit {
  onlyImagePath: string;
  
  constructor() {
    this.onlyImagePath = '/assets/img/projects/ion1.png';
  }
  
  ngOnInit() {
  }
  
}
