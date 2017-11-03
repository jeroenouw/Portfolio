import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me-mobile.component.scss']
})
export class AboutMeComponent implements OnInit {
  fullImagePath: string;
  ngImagePath: string;
  jsImagePath: string;
  fbImagePath: string;
  gitImagePath: string;
  htmlImagePath: string;
  cssImagePath: string;
  ionImagePath: string;
  nodeImagePath: string;
  styImagePath: string;
  typImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/img/DSC_0006_Edit.jpg';
    this.ngImagePath = '/assets/img/angular.svg';
    this.jsImagePath = '/assets/img/js.svg';
    this.fbImagePath = '/assets/img/firebase.svg';
    this.gitImagePath = '/assets/img/git.svg';
    this.htmlImagePath = '/assets/img/html5.svg';
    this.cssImagePath = '/assets/img/css.svg';
    this.ionImagePath = '/assets/img/ionic.svg';
    this.nodeImagePath = '/assets/img/nodejs.svg';
    this.styImagePath = '/assets/img/stylus.svg';
    this.typImagePath = '/assets/img/typescript.svg'; }

  ngOnInit() {
  }

}
