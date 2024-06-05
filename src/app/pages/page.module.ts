import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';
import { MaterialModule } from '../material-module';



@NgModule({
  declarations: [PagesComponent, HomeComponent,],
  imports: [
    CommonModule,
    PageRoutingModule,
    MaterialModule
  ]
})
export class PageModule { }
