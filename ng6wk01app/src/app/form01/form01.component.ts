import { Component, OnInit } from '@angular/core';

import { Address } from '../address';

@Component(
    {
        selector:    'app-form01',
        templateUrl: './form01.component.html',
        styleUrls:   [ './form01.component.css' ]
    } )
export class Form01Component implements OnInit {

    address = new Address();

    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
        alert( "Thanks for submitting! Data: " + JSON.stringify( this.address ) );
    }

}
