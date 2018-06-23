import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarAndSideComponent }  from './nav-bar-and-side/nav-bar-and-side.component';
import { LayoutModule }            from '@angular/cdk/layout';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { FormsModule }             from '@angular/forms';

import 'hammerjs';
import { Form01Component }         from './form01/form01.component';
import { WelcomeComponent }        from './welcome/welcome.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

import { MaterialModule } from './material.module';
import { AppRouters }     from './app.routes';

import { PostService }         from './data/post.service';
import { AuthService }         from './auth.service';
import { PostDialogComponent } from './post-dialog/post-dialog.component';






@NgModule(
    {
        declarations:    [
            AppComponent,
            NavBarAndSideComponent,
            Form01Component,
            WelcomeComponent,
            DashboardComponent,
            PostDialogComponent
        ],
        imports:         [
            BrowserModule,
            BrowserAnimationsModule,
            LayoutModule,
            MaterialModule,
            FlexLayoutModule,
            FormsModule,
            AppRouters
        ],
        providers:       [ PostService, AuthService ],
        bootstrap:       [ AppComponent ],
        entryComponents: [
            PostDialogComponent
        ]
    } )
export class AppModule {}
