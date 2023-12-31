import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './Toolbar/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { ScrollArrowComponent } from './scrollArrow/scroll-arrow/scroll-arrow.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecruitersComponent } from './recruiters/recruiters.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    HobbiesComponent,
    ContactComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    CommonModule,
    ScrollArrowComponent,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    RecruitersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
