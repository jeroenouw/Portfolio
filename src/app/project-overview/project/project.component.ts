import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  imagePath: string;

  constructor() {
    this.imagePath = '/assets/img/DSC_0006_Edit.jpg';
   }

  ngOnInit() {
  }

}
