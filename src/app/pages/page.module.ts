import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';
import { MaterialModule } from '../material-module';
import { AboutComponent } from './about/about.component';
import { CAComponent } from './ca/ca.component';



@NgModule({
  declarations: [PagesComponent, HomeComponent, AboutComponent, CAComponent,],
  imports: [
    CommonModule,
    PageRoutingModule,
    MaterialModule
  ]
})
export class PageModule { }
