import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

// Projects
import { ProjectComponent } from './project-overview/project/project.component';
import { FtsfWebshopComponent } from './project-overview/ftsf-webshop/ftsf-webshop.component';
import { CompetaMilmanComponent } from './project-overview/competa-milman/competa-milman.component';
import { NgxmatfireComponent } from './project-overview/ngxmatfire/ngxmatfire.component';
import { NgxaiComponent } from './project-overview/ngxai/ngxai.component';

// Blog Overview
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';

// Blog Posts
import { BlogComponent } from './blog-overview/blog/blog.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },

  // Projects
  { path: 'project', component: ProjectComponent },
  { path: 'projects/ftsf-webshop', component: FtsfWebshopComponent },
  { path: 'projects/competa-milman', component: CompetaMilmanComponent },
  { path: 'projects/ngx-mat-fire', component: NgxmatfireComponent },
  { path: 'projects/ngx-ai', component: NgxaiComponent },

  // Blog Overview
  { path: 'blogs', component: BlogOverviewComponent },

  // Blog Posts
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouting { }
