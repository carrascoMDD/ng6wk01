import { APP_BASE_HREF }                    from "@angular/common";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule }             from '@angular/forms';

import {
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule
}                                  from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes }    from '@angular/router';
import { AuthService }             from "../auth.service";
import { DashboardComponent }      from "../dashboard/dashboard.component";
import { PostService }             from "../data/post.service";
import { WelcomeComponent }        from "../welcome/welcome.component";


import { Form01Component } from './form01.component';


const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent }
];

describe( 'Form01Component', () => {
    let component: Form01Component;
    let fixture: ComponentFixture<Form01Component>;

    beforeEach( async( () => {
        TestBed.configureTestingModule(
            {
                imports:      [
                    MatDialogModule,
                    MatSidenavModule,
                    MatToolbarModule,
                    MatIconModule,
                    MatListModule,
                    MatInputModule,
                    MatButtonModule,
                    MatSelectModule,
                    MatCardModule,
                    MatTableModule,
                    BrowserAnimationsModule,
                    RouterModule.forRoot( routes ),
                    FormsModule
                ],
                declarations: [
                    Form01Component,
                    DashboardComponent,
                    WelcomeComponent
                ],
                providers:    [
                    AuthService,
                    { provide: APP_BASE_HREF, useValue: '/' },
                    PostService
                ],
            } ).compileComponents();
    } ) );

    beforeEach( () => {
        fixture   = TestBed.createComponent( Form01Component );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
