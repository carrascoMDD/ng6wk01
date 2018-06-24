import { browser} from 'protractor';

import { Sidenav }    from '../pageobjects/sidenav.po';
import { LoginAuth0 } from "../pageobjects/loginauth0.po";

const LOG = true;

export class LoginHelper {

    doLogoutIfLoggedIn(): Promise<void> {

        let sidenav = new Sidenav();

        let aHasLogout = false;

        let anErrorHasBeenLogged = false;

        return new Promise<void>( (theResolve, theReject) => {

            if( LOG) {
                console.log( "LoginHelper.doLogoutIfLoggedIn - about to findElements getToolbarLinkLogoutExists");
            }
            this.isLoggedIn()
                .then(
                    ( theElements) =>  {
                        if( LOG) {
                            console.log( "LoginHelper.doLogoutIfLoggedIn - done findElements getToolbarLinkLogoutExists");
                        }
                        if( theElements && theElements.length) {
                            aHasLogout = true;
                            if( LOG) {
                                console.log( "LoginHelper.doLogoutIfLoggedIn - about to getToolbarLinkLogout().click()");
                            }
                            return sidenav.getToolbarLinkLogout().click();
                        }

                        console.log( "LoginHelper.doLogoutIfLoggedIn - Logout does not exists");
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogoutIfLoggedIn - ERROR on findElements getToolbarLinkLogoutExists");
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( !aHasLogout) {
                            return;
                        }
                        if( LOG) {
                            console.log( "LoginHelper.doLogoutIfLoggedIn - about to sleep( 3000)");
                        }
                        return browser.sleep( 3000);
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin - ERROR on sidenav.getToolbarLinkLogout().click() " + theError);
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( !aHasLogout) {
                            return;
                        }
                        if( LOG) {
                            console.log( "LoginHelper.doLogoutIfLoggedIn - about to  sidenav.getToolbarLinkLoginExists()");
                        }
                        return browser.driver.findElements( sidenav.getToolbarLinkLoginExists());
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin - ERROR on browser.sleep( 3000) " + theError);
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.doLogoutIfLoggedIn - OK");
                        }
                        theResolve();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            console.log( "LoginHelper.doLogoutIfLoggedIn - ERROR on findElements sidenav.getToolbarLinkLoginExists()" + theError);
                        }
                        theReject( theError);
                    }
                );
        });


    }


    isLoggedIn() {

        let sidenav = new Sidenav();

        if( LOG) {
            console.log( "LoginHelper.isLoggedIn - about to findElements getToolbarLinkLoginExists()");
        }

        return browser.driver.findElements( sidenav.getToolbarLinkLogoutExists());
    }



    assertIsLoggedIn() {

        let sidenav = new Sidenav();

        if( LOG) {
            console.log( "LoginHelper.isLoggedIn - about to findElements getToolbarLinkLoginExists()");
        }

        return browser.driver.findElement( sidenav.getToolbarLinkLogoutExists());
    }



    doLogin() {

        let sidenav = new Sidenav();
        let loginAuth0 = new LoginAuth0();

        if( LOG) {
            console.log( "LoginHelper.doLogin - about to navigateTo()");
        }

        sidenav.navigateTo();

        let anErrorHasBeenLogged = false;

        return new Promise<void>( (theResolve, theReject) => {
            if( LOG) {
                console.log( "LoginHelper.doLogin - about to findElements getToolbarLinkLoginExists()");
            }

            browser.driver.findElement( sidenav.getToolbarLinkLoginExists())
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.doLogin - about to getToolbarLinkLogin().click()");
                        }

                        return sidenav.getToolbarLinkLogin().click();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin - ERROR findElements getToolbarLinkLoginExists() " + theError);
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.doLogin - about to sleep( 3000)");
                        }
                        return browser.sleep( 3000);
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin - ERROR findElements getToolbarLinkLogin().click() " + theError);
                        }

                        throw theError;
                    }
                )
                .then(
                    ()=> {
                        browser.waitForAngularEnabled( false);
                        if( LOG) {
                            console.log( "LoginHelper.doLogin - about to findElements loginAuth0.getLastLoginButtonExists()");
                        }
                        return browser.driver.findElements( loginAuth0.getLastLoginButtonExists());
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin - ERROR on to sleep( 3000) " + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    ( theLastLoginElements) => {
                        if( theLastLoginElements && theLastLoginElements.length) {
                            return this.login_last();
                        }
                        return this.login_typing();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin - ERROR on to sleep( 3000) " + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.doLogin - about to sleep( 3000)");
                        }

                        return browser.sleep( 3000);
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin - ERROR on login_typing() or login_last() " + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG && !anErrorHasBeenLogged) {
                            console.log( "LoginHelper.doLogin - about to this.assertIsLoggedIn()");
                        }
                        browser.waitForAngularEnabled( true);

                        return this.assertIsLoggedIn();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin - ERROR on sleep( 2000) " + theError);
                        }
                        browser.waitForAngularEnabled( true);

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin OK");
                        }

                        theResolve();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLogin - ERROR on findElement sidenav.getToolbarLinkLogoutExists() " + theError);
                        }
                        theReject( theError);
                    }
                );

        });
    }







    login_typing() {

        let loginAuth0 = new LoginAuth0();

        if( LOG) {
            console.log( "LoginHelper.login_typing - about to navigateTo()");
        }

        let anErrorHasBeenLogged = false;

        return new Promise<void>( (theResolve, theReject) => {
            if( LOG) {
                console.log( "LoginHelper.login_typing - about to findElements getToolbarLinkLoginExists()");
            }

            browser.driver.findElement( loginAuth0.getLoginButtonExists())
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.login_typing - about to findElement loginAuth0.getUserEmailExists()");
                        }
                        return browser.driver.findElement( loginAuth0.getUserEmailExists());
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.login_typing - ERROR on findElement loginAuth0.getLoginButtonExists() " + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.login_typing - about to sendKeys carrascoauth0user01@modeldd.org");
                        }
                        loginAuth0.getUserEmail().sendKeys( "carrascoauth0user01@modeldd.org");

                        if( LOG) {
                            console.log( "LoginHelper.login_typing - about to findElement loginAuth0.getUserPasswordExists()");
                        }
                        return browser.driver.findElement( loginAuth0.getUserPasswordExists());
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.login_typing - ERROR on findElement loginAuth0.getUserEmailExists() " + theError);
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.login_typing - about to sendKeys Au123th456or");
                        }
                        loginAuth0.getUserPassword().sendKeys( "Au123th456or");

                        return browser.driver.findElement( loginAuth0.getLoginButtonExists());
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.login_typing - ERROR on sendKeys carrascoauth0user01@modeldd.org " + theError);
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.login_typing - about to loginAuth0.getLoginButton().click()");
                        }

                        return loginAuth0.getLoginButton().click();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.login_typing - ERROR on sendKeys Au123th456or " + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.login_typing OK");
                        }

                        theResolve();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.login_typing - ERROR on loginAuth0.getLoginButton().click() " + theError);
                        }
                        theReject( theError);
                    }
                );

        });
    }







    login_last() {

        let loginAuth0 = new LoginAuth0();

        if( LOG) {
            console.log( "LoginHelper.login_last - about to navigateTo()");
        }

        let anErrorHasBeenLogged = false;

        return new Promise<void>( (theResolve, theReject) => {
            if( LOG) {
                console.log( "LoginHelper.login_last - about to findElement getLastLoginButtonExists()");
            }

            return browser.driver.findElement( loginAuth0.getLastLoginButtonExists())
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.login_last - about to loginAuth0.getLastLoginButton().click()");
                        }
                        return loginAuth0.getLastLoginButton().click();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.login_last - ERROR on findElement getLastLoginButtonExists" + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.login_last OK");
                        }

                        theResolve();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.login_last - ERROR on loginAuth0.getLastLoginButton().click()" + theError);
                        }
                        theReject( theError);
                    }
                );

        });
    }






    doLoginIfNeeded() {

        return new Promise( ( theResolve, theReject) => {

            let anErrorHasBeenLogged = false;
            let aWasLoggedIn = false;

            if( LOG) {
                console.log( "LoginHelper.doLoginIfNeeded - about to this.isLoggedIn()");
            }

            this.isLoggedIn()
                .then(
                    ( theElements) => {

                        if( theElements && theElements.length) {
                            if( LOG) {
                                console.log( "LoginHelper.doLoginIfNeeded - aWasLoggedIn = true");
                            }

                            aWasLoggedIn = true;
                        }
                        else {
                            if( LOG) {
                                console.log( "LoginHelper.doLoginIfNeeded - about to  this.doLogin()");
                            }

                            return this.doLogin();
                        }
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLoginIfNeeded - ERROR on this.isLoggedIn() " + theError);
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.doLoginIfNeeded - OK aWasLoggedIn=" + aWasLoggedIn);
                        }

                        theResolve( aWasLoggedIn);
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.doLoginIfNeeded ERROR " + theError);
                        }

                        theReject( theError);
                    }
                );
        });



    }




}
