import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'experience', component: ExperienceComponent},
  {path: '', redirectTo :'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
