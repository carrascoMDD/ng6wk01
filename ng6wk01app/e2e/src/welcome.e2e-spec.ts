import { WelcomePage } from './pageobjects/welcome.po';


describe( 'ng6wk01 Welcome', () => {
    let page: WelcomePage;

    beforeEach( () => {
        page = new WelcomePage();
    } );


    it( 'should display header Welcome and description Playground ', () => {
        page.navigateTo();
        expect( page.getHeaderText() ).toEqual( "ng6wk01 Welcome" );
        expect( page.getDescriptionText() ).toEqual( "Playground with Typescript2 and Angular6 without Ionic & Cordova." );
        expect( page.getPromptText() ).toEqual( "Click on Login to get Started!!!" );

    } );
} );
