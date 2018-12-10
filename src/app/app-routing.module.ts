import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DashboardMainComponent } from './layouts/material-components/dashboard-main/dashboard-main.component';
import { GraphicsContentComponent } from './layouts/full/graphics-content/graphics-content.component';



const routes: Routes = [
  { path: 'home', component: DashboardMainComponent },
  { path: 'graphics', component: GraphicsContentComponent },
  { path: '**' , pathMatch: 'full', redirectTo: 'home'},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
