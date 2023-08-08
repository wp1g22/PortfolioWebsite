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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    CommonModule,
    ScrollArrowComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
