import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';
import { MaterialModule } from '../material-module';
import { AboutComponent } from './about/about.component';
import { CAComponent } from './ca/ca.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PagesComponent, HomeComponent, AboutComponent, CAComponent, SkillComponent, ProjectComponent, ContactComponent,],
  imports: [
    CommonModule,
    PageRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PageModule { }
