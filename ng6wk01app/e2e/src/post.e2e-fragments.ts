import { LoginHelper} from './helpers/login.helper'
import { PostHelper}  from './helpers/post.helper'
import { DashboardHelper}  from './helpers/dashboard.helper'

import { Dashboard} from './pageobjects/dashboard.po'


const LOG = true;

export class PostFragments {

    dashboard       = new Dashboard();
    loginHelper     = new LoginHelper();
    postHelper      = new PostHelper();
    dashboardHelper = new DashboardHelper();



    addPost( thePostfix: string) {

        return new Promise( ( theResolve, theReject) => {

            let aPostfix = thePostfix;
            if( !aPostfix) {
                aPostfix = this.postHelper.newPostPostfix();
            }

            let anErrorHasBeenLogged = false;

            if( LOG) {
                console.log( "PostFragments.addPost - about to navigateTo()");
            }
            this.dashboard.navigateTo();

            if( LOG) {
                console.log( "PostFragments.addPost - about to doLogoutIfLoggedIn()");
            }

            this.loginHelper.doLoginIfNeeded()
                .then(
                    ()=> {
                        if( LOG) {
                            console.log( "PostFragments.addPost - about to hasAddPostButton()");
                        }

                        return this.dashboardHelper.hasAddPostButton();
                    },
                    ( theError) => {
                        throw theError;
                    }
                )
                .then(
                    ( theHasPostButton) => {

                        expect( theHasPostButton).toBe( true);

                        if( LOG) {
                            console.log( "PostFragments.addPost - about to dashboard.clickPostButton()");
                        }

                        return this.dashboardHelper.clickPostButton();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "PostFragments.addPost - ERROR on hasAddPostButton() " + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    ()=> {
                        if( LOG) {
                            console.log( "PostFragments.addPost - about to postHelper.fillAndCreatePost()");
                        }


                        return this.postHelper.fillAndCreatePost( aPostfix);
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "PostFragments.addPost - ERROR on this.dashboardHelper.clickPostButton() " + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    ()=> {
                        if( LOG) {
                            console.log( "PostFragments.addPost - about to postHelper.mustExistPostWithPostfix()");
                        }

                        return this.dashboardHelper.mustExistPostWithPostfix( aPostfix);
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "PostFragments.addPost - ERROR on this.postHelper.fillAndCreatePost( aPostfix) " + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    ()=> {
                        if( LOG) {
                            console.log( "PostFragments.addPost - OK");
                        }

                        theResolve();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "PostFragments.addPost - ERROR on dashboardHelper.mustExistPostWithPostfix() " + theError);
                        }
                        theReject( theError);
                    });

        } );
    }

}
