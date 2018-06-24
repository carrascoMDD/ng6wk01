import { AppPage } from './pageobjects/app.po';


describe( 'ng6wk01 App', () => {
    let page: AppPage;

    beforeEach( () => {
        page = new AppPage();
    } );

    it( 'should display welcome message', () => {
        page.navigateTo();
        expect( page.getHeaderText() ).toEqual( "ng6wk01 Welcome" );
    } );
} );
