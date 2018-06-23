import { Sidenav } from './sidenav.po';
import { LoginHelper} from './login.helper'

const LOG = true;

describe( 'ng6wk01 Sidenav logged in', () => {
    let sidenav: Sidenav;
    let loginHelper: LoginHelper;

    beforeEach( () => {
        sidenav = new Sidenav();
        loginHelper = new LoginHelper();
    } );

    it( 'should logged in user items', (done) => {

        if( LOG) {
            console.log( "should logged in user items - about to navigateTo()");
        }
        sidenav.navigateTo();

        if( LOG) {
            console.log( "should logged in user items - about to doLogoutIfLoggedIn()");
        }

        loginHelper.doLogoutIfLoggedIn()
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should logged in user items - about to doLogin()");
                    }

                    return loginHelper.doLogin();
                },
                ( theError) => {
                    throw theError;
                }
            )
            .then(
                ()=> {
                    expect( sidenav.getToolbarBlogLink().getText() ).toEqual( "Material Blog" );
                    expect( sidenav.getToolbarLinkHome().getText()).toEqual( "homeHome" );
                    expect( sidenav.getToolbarLinkDashboard().getText()).toEqual( "dashboardDashboard" );
                    expect( sidenav.getToolbarLinkLogout().getText()).toEqual( "inputLogOut" );
                    if( LOG) {
                        console.log( "should logged in user items - done doLogin()");
                    }
                    done();
                },
                ( theError) => {
                    if( LOG) {
                        console.log( "should logged in user items - ERROR " + theError);
                    }
                    done.fail( theError);
                });
    } );
} );
