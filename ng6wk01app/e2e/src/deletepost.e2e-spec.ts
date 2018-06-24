import { LoginHelper} from './helpers/login.helper'
import { PostHelper}  from './helpers/post.helper'
import { DashboardHelper}  from './helpers/dashboard.helper'

import { Dashboard} from './pageobjects/dashboard.po'
import { PostFragments } from './post.e2e-fragments'


const LOG = true;

describe( 'ng6wk01 delete Post', () => {
    let dashboard: Dashboard;
    let dashboardHelper: DashboardHelper;
    let loginHelper: LoginHelper;
    let postHelper: PostHelper;
    let postFragments: PostFragments;

    beforeEach( () => {
        dashboard       = new Dashboard();
        loginHelper     = new LoginHelper();
        postHelper      = new PostHelper();
        dashboardHelper = new DashboardHelper();
        postFragments   = new PostFragments();
    } );



    it( 'should not delete when logged out', (done) => {

        let anErrorHasBeenLogged = false;

        let aPostfix = postHelper.newPostPostfix();

        let aRowIndex   = -1;
        let aRowIndex_2 = -1;

        if( LOG) {
            console.log( "should not delete when logged out - about to postFragments.addPost( "+ aPostfix + ")");
        }
        postFragments.addPost( aPostfix)
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should not delete when logged out - about to do loginHelper doLogoutIfLoggedIn()");
                    }

                    return loginHelper.doLogoutIfLoggedIn();
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should not delete when logged out - ERROR on postFragments.addPost( "+ aPostfix + ") " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should not delete when logged out - about to dashboard.navigateTo()");
                    }

                    return dashboard.navigateTo();
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should not delete when logged out - ERROR on loginHelper.doLogoutIfLoggedIn() " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should not delete when logged out - about to dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")");
                    }

                    return dashboardHelper.findPostsTableRowIndexWithPostfix( aPostfix);
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should not delete when logged out - ERROR on dashboard.navigateTo() " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ( theRowIndex)=> {

                    aRowIndex = theRowIndex;

                    expect( theRowIndex >= 0).toBe( true);

                    if( !( theRowIndex >= 0)) {
                        if( LOG) {
                            console.log( "should not delete when logged out - ERROR row index < 0 from dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")");
                        }

                        throw  "should not delete when logged out - ERROR row index < 0 from dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")";
                    }

                    if( LOG) {
                        console.log( "should not delete when logged out - about to dashboardHelper.clickDeleteOnRowIndex_ExpectDialog( " + theRowIndex + ", 'Login in Before')");
                    }

                    return dashboardHelper.clickDeleteOnRowIndex_ExpectDialog( theRowIndex, "Login in Before");
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should not delete when logged out - ERROR on dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ") " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should not delete when logged out - about to second dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")");
                    }

                    return dashboardHelper.findPostsTableRowIndexWithPostfix( aPostfix);
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should not delete when logged out - ERROR on dashboardHelper.clickDeleteOnRowIndex_ExpectDialog( " + aRowIndex + ", 'Login in Before')");
                    }
                    throw theError;
                }
            )
            .then(
                ( theRowIndex)=> {

                    aRowIndex_2 = theRowIndex;
                    expect( theRowIndex >= 0).toBe( true);

                    if( !( theRowIndex >= 0)) {
                        if( LOG) {
                            console.log( "should not delete when logged out - ERROR second row index < 0 from dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")");
                        }

                        throw  "should not delete when logged out - ERROR second row index < 0 from dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")";
                    }

                    return Promise.resolve();
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should not delete when logged out - ERROR on dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ") " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should not delete when logged out - OK");
                    }

                    done();
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        console.log( "should not delete when logged out - ERROR on postHelper.newPostPostfix() " + theError);
                    }
                    done.fail( theError);
                });

    } );






    it( 'should delete when logged in', (done) => {

        let anErrorHasBeenLogged = false;

        let aPostfix = postHelper.newPostPostfix();

        let aRowIndex   = -1;
        let aRowIndex_2 = -1;

        if( LOG) {
            console.log( "should delete when logged in - about to postFragments.addPost( "+ aPostfix + ")");
        }
        postFragments.addPost( aPostfix)
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should delete when logged in - about to do Redundant loginHelper doLogoutIfLoggedIn()");
                    }

                    return loginHelper.doLoginIfNeeded(); /* Redundant, at this moment it should be logged in */
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should delete when logged in - ERROR on postFragments.addPost( "+ aPostfix + ") " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should delete when logged in - about to dashboard.navigateTo()");
                    }

                    return dashboard.navigateTo();
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should delete when logged in - ERROR on loginHelper.doLogoutIfLoggedIn() " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should delete when logged in - about to dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")");
                    }

                    return dashboardHelper.findPostsTableRowIndexWithPostfix( aPostfix);
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should delete when logged in - ERROR on dashboard.navigateTo() " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ( theRowIndex)=> {

                    aRowIndex = theRowIndex;

                    expect( theRowIndex >= 0).toBe( true);

                    if( !( theRowIndex >= 0)) {
                        if( LOG) {
                            console.log( "should delete when logged in - ERROR row index < 0 from dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")");
                        }

                        throw  "should delete when logged in - ERROR row index < 0 from dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")";
                    }

                    if( LOG) {
                        console.log( "should delete when logged in - about to dashboardHelper.clickDeleteOnRowIndex_ExpectDialog( " + theRowIndex + ", 'Login in Before')");
                    }

                    return dashboardHelper.clickDeleteOnRowIndex_ExpectDialog( theRowIndex, "Login in Before");
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should delete when logged in - ERROR on dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ") " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should delete when logged in - about to second dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")");
                    }

                    return dashboardHelper.findPostsTableRowIndexWithPostfix( aPostfix);
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should delete when logged in - ERROR on dashboardHelper.clickDeleteOnRowIndex_ExpectDialog( " + aRowIndex + ", 'Login in Before')");
                    }
                    throw theError;
                }
            )
            .then(
                ( theRowIndex)=> {

                    aRowIndex_2 = theRowIndex;
                    expect( theRowIndex >= 0).toBe( false);

                    if( theRowIndex >= 0) {
                        if( LOG) {
                            console.log( "should delete when logged in - ERROR second row index >= 0 from dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")");
                        }

                        throw  "should delete when logged in - ERROR second row index >= 0 from dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ")";
                    }

                    return Promise.resolve();
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        anErrorHasBeenLogged = true;
                        console.log( "should delete when logged in - ERROR on second dashboardHelper.findPostsTableRowIndexWithPostfix( " + aPostfix + ") " + theError);
                    }
                    throw theError;
                }
            )
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should delete when logged in - OK");
                    }

                    done();
                },
                ( theError) => {
                    if( LOG && !anErrorHasBeenLogged) {
                        console.log( "should delete when logged in - ERROR on postHelper.newPostPostfix() " + theError);
                    }
                    done.fail( theError);
                });

    } );






} );
