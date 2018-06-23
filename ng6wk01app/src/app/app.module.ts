import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarAndSideComponent } from './nav-bar-and-side/nav-bar-and-side.component';
import { LayoutModule } from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';
import { Form01Component } from './form01/form01.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MaterialModule} from './material.module';
import {AppRouters} from './app.routes';

import {PostService} from './data/post.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarAndSideComponent,
    Form01Component,
    WelcomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouters
  ],
  providers: [ PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
