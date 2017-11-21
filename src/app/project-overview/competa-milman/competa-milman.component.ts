import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competa-milman',
  templateUrl: './competa-milman.component.html',
  styleUrls: ['../project/project.component.scss', '../project/project-mobile.component.scss']
})
export class CompetaMilmanComponent implements OnInit {
  onlyImagePath: string;

  constructor() {
    this.onlyImagePath = '/assets/img/projects/milm5.jpg';
  }

  ngOnInit() {
  }

}
