import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarAndSideComponent } from './nav-bar-and-side/nav-bar-and-side.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import 'hammerjs';
import { Form01Component } from './form01/form01.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarAndSideComponent,
    Form01Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
