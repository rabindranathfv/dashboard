import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material stuff
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule
} from '@angular/material';


// components
import { NavbarComponent } from '../app/layouts/full/navbar/navbar.component';
import { SidebarComponent } from '../app/layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/material-components/header/header.component';
import { SpinnerComponent } from './layouts/material-components/spinner/spinner.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardMainComponent } from './layouts/material-components/dashboard-main/dashboard-main.component';
import { GraphicsContentComponent } from './layouts/full/graphics-content/graphics-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    SpinnerComponent,
    DashboardMainComponent,
    GraphicsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
