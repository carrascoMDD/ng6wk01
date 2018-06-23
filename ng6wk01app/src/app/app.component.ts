import { Component }   from '@angular/core';
import { AuthService } from './auth.service';






@Component(
    {
        selector:    'app-root',
        templateUrl: './app.component.html',
        styleUrls:   [ './app.component.css' ]
    } )
export class AppComponent {
    title = 'ng6wk01 Playground with Typescript2 and Angular6 without Ionic & Cordova';


    constructor( public auth: AuthService ) {
        auth.handleAuthentication();
    }
}
