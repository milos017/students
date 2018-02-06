import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: '', redirectionTo: 'naslovna', pathMatch: 'full'},
  { path: 'naslovna', component: HomepageComponent},
  { path: 'studenti', component: StudentsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
