import { browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

import { Sidenav }    from './sidenav.po';
import { LoginAuth0 } from "./loginauth0.po";
import { LoginHelper} from './login.helper'

const LOG = true;

describe( 'ng6wk01 Sidenav login', () => {
    let sidenav: Sidenav;
    let loginAuth0: LoginAuth0;
    let loginHelper: LoginHelper;

    beforeEach( () => {
        sidenav = new Sidenav();
        loginAuth0 = new LoginAuth0();
        loginHelper = new LoginHelper();
    } );

    it( 'should login', (done) => {

        if( LOG) {
            console.log( "should login - about to navigateTo()");
        }
        sidenav.navigateTo();

        if( LOG) {
            console.log( "should login - about to doLogoutIfLoggedIn()");
        }

        loginHelper.doLogoutIfLoggedIn()
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should login - about to doLogin()");
                    }
                    return loginHelper.doLogin();
                },
                ( theError) => {
                    throw theError;
                })
            .then(
                () => {
                    if( LOG) {
                        console.log( "should login - done doLogin()");
                    }
                    done();
                },
                ( theError) => {
                    if( LOG) {
                        console.log( "should login - ERROR " + theError);
                    }
                    done.fail( theError);
                }
            )
    } );
} );
