import { browser }    from "protractor";
import { post }       from "selenium-webdriver/http";
import { LoginHelper} from './helpers/login.helper'
import { PostHelper}  from './helpers/post.helper'
import { DashboardHelper}  from './helpers/dashboard.helper'

import { Dashboard} from './pageobjects/dashboard.po'


const LOG = true;

describe( 'ng6wk01 add Post', () => {
    let dashboard: Dashboard;
    let dashboardHelper: DashboardHelper;
    let loginHelper: LoginHelper;
    let postHelper: PostHelper;

    beforeEach( () => {
        dashboard       = new Dashboard();
        loginHelper     = new LoginHelper();
        postHelper      = new PostHelper();
        dashboardHelper = new DashboardHelper();
    } );


    it( 'should not add when logged out', (done) => {

        if( LOG) {
            console.log( "should not add when logged out - about to navigateTo()");
        }
        dashboard.navigateTo();

        if( LOG) {
            console.log( "should not add when logged out - about to doLogoutIfLoggedIn()");
        }

        loginHelper.doLogoutIfLoggedIn()
            .then(
                () => {
                    if( LOG) {
                        console.log( "should not add when logged out - about to hasAddPostButton()");
                    }

                    return dashboardHelper.hasAddPostButton();
                },
                ( theError) => {
                    throw theError;
                }
            )
            .then(
                ( theHasPostButton)=> {

                    expect( theHasPostButton).toBe( false);
                    done();
                },
                ( theError) => {
                    if( LOG) {
                        console.log( "should not add when logged out - ERROR on hasAddPostButton() " + theError);
                    }
                    done.fail( theError);
                });
    } );






    it( 'should add when logged in', (done) => {

        let anErrorHasBeenLogged = false;

        if( LOG) {
            console.log( "should add when logged in - about to navigateTo()");
        }
        dashboard.navigateTo();

        if( LOG) {
            console.log( "should add when logged in - about to doLogoutIfLoggedIn()");
        }

        let aPostfix = "";

        loginHelper.doLoginIfNeeded()
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should add when logged in - about to hasAddPostButton()");
                    }

                    return dashboardHelper.hasAddPostButton();
                },
                ( theError) => {
                    throw theError;
                }
            )
            .then(
                ( theHasPostButton) => {

                    expect( theHasPostButton).toBe( true);

                    if( LOG) {
                        console.log( "should add when logged in - about to dashboard.clickPostButton()");
                    }

                    return dashboardHelper.clickPostButton();
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should add when logged in - ERROR on hasAddPostButton() " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should add when logged in - about to postHelper.fillAndCreatePost()");
                    }

                    aPostfix = postHelper.newPostPostfix();
                    return postHelper.fillAndCreatePost( aPostfix);
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should add when logged in - ERROR on findElement dashboard.getAddPostButtonExists() " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {

                    if( LOG) {
                        console.log( "should add when logged in - about to postHelper.mustExistPostWithPostfix()");
                    }

                    return postHelper.mustExistPostWithPostfix( aPostfix);
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should add when logged in - ERROR on findElements dashboard.getAddPostButtonExists() " + theError);
                    }
                    done.fail( theError);
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should add when logged in - OK");
                    }

                    done();
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should add when logged in - ERROR on findElements dashboard.getAddPostButtonExists() " + theError);
                    }
                    done.fail( theError);
                });
    } );

} );
