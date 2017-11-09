import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

// Projects
import { ProjectComponent } from './project-overview/project/project.component';
import { FtsfWebshopComponent } from './project-overview/ftsf-webshop/ftsf-webshop.component';
import { CompetaMilmanComponent } from './project-overview/competa-milman/competa-milman.component';
import { NgxmatfireComponent } from './project-overview/ngxmatfire/ngxmatfire.component';
import { NgxaiComponent } from './project-overview/ngxai/ngxai.component';
import { NgxionicComponent } from './project-overview/ngxionic/ngxionic.component';

// Blog Overview
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';

// Blog Posts
import { BlogComponent } from './blog-overview/blog/blog.component';

import { MenuComponent } from './shared/layouts/menu/menu.component';
import { SidebarComponent } from './shared/layouts/sidebar/sidebar.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HeaderComponent } from './shared/layouts/header/header.component';

import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectComponent,
    BlogOverviewComponent,
    BlogComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    FtsfWebshopComponent,
    CompetaMilmanComponent,
    NgxmatfireComponent,
    NgxaiComponent,
    NgxionicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
