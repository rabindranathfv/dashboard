import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DashboardMainComponent } from './layouts/material-components/dashboard-main/dashboard-main.component';



const routes: Routes = [
  { path: 'home', component: DashboardMainComponent },
  // { path: 'graphics', component: DashboardMainComponent }
  { path: '**' , pathMatch: 'full', redirectTo: 'home'},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
