import { Sidenav }    from './pageobjects/sidenav.po';
import { LoginHelper} from './helpers/login.helper'

const LOG = true;

describe( 'ng6wk01 Sidenav logged out', () => {
    let sidenav: Sidenav;
    let loginHelper: LoginHelper;

    beforeEach( () => {
        sidenav = new Sidenav();
        loginHelper = new LoginHelper();
    } );

    it( 'should display sidenav items for logged out users', (done) => {
        sidenav.navigateTo();

        loginHelper.doLogoutIfLoggedIn()
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should logged out user toolbar items - done doLogoutIfLoggedIn()");
                    }

                    expect( sidenav.getToolbarBlogLink().getText() ).toEqual( "Material Blog" );
                    expect( sidenav.getToolbarLinkLogin().getText() ).toEqual( "inputLogin" );
                    expect( sidenav.getToolbarLinkDashboard().getText() ).toEqual( "dashboardDashboard" );

                    done();
                },
                ( theError) => {
                    if( LOG) {
                        console.log( "should logged out user toolbar items - ERROR on doLogoutIfLoggedIn()");
                    }

                    done.fail( theError);
                });

    } );
} );
