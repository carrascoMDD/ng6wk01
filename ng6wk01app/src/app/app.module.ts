import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MustloginAlertComponent } from './mustlogin-alert/mustlogin-alert.component';
import { ConfirmDialogComponent }  from "./confirm-dialog/confirm-dialog.component";




@NgModule(
    {
        declarations:    [
            AppComponent,
            Form01Component,
            WelcomeComponent,
            DashboardComponent,
            PostDialogComponent,
            MustloginAlertComponent,
            ConfirmDialogComponent
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
            PostDialogComponent,
            MustloginAlertComponent,
            ConfirmDialogComponent
        ]
    } )
export class AppModule {}
