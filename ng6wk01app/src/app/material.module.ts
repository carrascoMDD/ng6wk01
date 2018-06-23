import { NgModule }      from '@angular/core';

import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
} from '@angular/material';

import 'hammerjs';


@NgModule(
    {
        imports: [
            MatToolbarModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatInputModule,
            MatButtonModule,
            MatCardModule,
            MatTableModule
        ],
        exports: [
            MatToolbarModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatInputModule,
            MatButtonModule,
            MatCardModule,
            MatTableModule
        ]
    } )
export class MaterialModule {}
