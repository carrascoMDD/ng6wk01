import { Sidenav } from './sidenav.po';
import { LoginHelper} from './login.helper'


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
                    expect( sidenav.getToolbarBlogLink().getText() ).toEqual( "Material Blog" );
                    expect( sidenav.getToolbarLinkLogin().getText() ).toEqual( "inputLogin" );
                    expect( sidenav.getToolbarLinkDashboard().getText() ).toEqual( "dashboardDashboard" );
                    done();
                },
                ( theError) => {
                    done.fail( theError);
                });

    } );
} );
