import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'experience', component: ExperienceComponent},
  {path : 'education', component: EducationComponent},
  {path : 'hobbies', component: HobbiesComponent},
  {path: '', redirectTo :'home', pathMatch: 'full'},
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
