import { browser} from 'protractor';

import { Sidenav }    from '../pageobjects/sidenav.po';
import { PostDialog } from "../pageobjects/post-dialog.po";

const LOG = true;

export class PostHelper {



    newPostPostfix(): string {

        const aNow = new Date();
        let aPostfix =  aNow.getFullYear() + "/" +
                    aNow.getMonth() +  "/" +
                    aNow.getDate() +  "-" +
                    aNow.getHours() +  ":" +
                    aNow.getMinutes() +  ":" +
                    aNow.getSeconds() + "." +
                    aNow.getMilliseconds();

        return aPostfix;
    }




    mustExistPostWithPostfix( thePostfix: string) {

    }





    fillAndCreatePost( thePostfix?: string): Promise<void> {

        let aPostfix = thePostfix;
        if( !aPostfix) {
            aPostfix =  this.newPostPostfix();
        }

        let postDialog = new PostDialog();

        let anErrorHasBeenLogged = false;

        return new Promise<void>( (theResolve, theReject) => {

            if( LOG) {
                console.log( "LoginHelper.fillAndCreatePost - about to postDialog.getTitle().sendKeys()");
            }
            postDialog.getTitle().sendKeys( "Post Title " + aPostfix)
                .then(
                    () =>  {
                        if( LOG) {
                            console.log( "LoginHelper.fillAndCreatePost - about to postDialog.getBody().sendKeys()");
                        }

                        return postDialog.getBody().sendKeys( "Post Body" + aPostfix)
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.fillAndCreatePost - ERROR on postDialog.getTitle().sendKeys() " + theError);
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.fillAndCreatePost - about to postDialog.getCategoryExists().click()");
                        }

                        return postDialog.getCategory().click();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.fillAndCreatePost - ERROR on postDialog.getBody().sendKeys() " + theError);
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.fillAndCreatePost - postDialog.getCategoryOption( 'Web-Development').click()");
                        }

                        return postDialog.getCategoryOption( 1).click();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "LoginHelper.fillAndCreatePost - ERROR on postDialog.getCategoryExists().click()");
                        }

                        throw theError;
                    }
                )
                .then(
                    () => {
                        if( LOG) {
                            console.log( "LoginHelper.fillAndCreatePost - about to postDialog.getSaveButton().click()");
                        }
                        return postDialog.getSaveButton().click();
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
                            console.log( "LoginHelper.fillAndCreatePost - OK");
                        }
                        theResolve();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            console.log( "LoginHelper.fillAndCreatePost - ERROR on postDialog.getSaveButton().click() " + theError);
                        }
                        theReject( theError);
                    }
                );
        });


    }




}
