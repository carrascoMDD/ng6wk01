import { protractor, browser, by, element, WebElement } from 'protractor';
import { WebElementPromise }    from "selenium-webdriver";

import { Dashboard }            from "../pageobjects/dashboard.po";
import { RowIndexFinderHelper } from "./rowindexfinder.helper";

const LOG = true;

export class DashboardHelper {

    dashboard = new Dashboard();
    rowIndexFinderHelper = new RowIndexFinderHelper();

    hasAddPostButton() {
        return new Promise( ( theResolve, theReject) => {
            if( LOG) {
                console.log( "DashboardHelper.hasAddPostButton - about to getAddPostButtonExists()");
            }
            browser.driver.findElements( this.dashboard.getAddPostButtonExists())
                .then(
                    ( thePostButtons)=> {
                        let aHasAddPostButton = thePostButtons && thePostButtons.length ? true : false;
                        if( LOG) {
                            console.log( "DashboardHelper.hasAddPostButton - about to getAddPostButtonExists() aHasAddPostButton=" + aHasAddPostButton);
                        }

                        theResolve( aHasAddPostButton);
                    },
                    ( theError) => {
                        if( LOG) {
                            console.log( "DashboardHelper.hasAddPostButton - ERROR on getAddPostButtonExists() " + theError);
                        }
                        theReject( theError);
                    });
        })
    }


    findAddPostButtons() {
        return new Promise( ( theResolve, theReject) => {
            if( LOG) {
                console.log( "DashboardHelper.findAddPostButtons - just findElements getAddPostButtonExists()");
            }

            theResolve( browser.driver.findElements( this.dashboard.getAddPostButtonExists()));
        })
    }

    findAddPostButton() {
        return new Promise( ( theResolve, theReject) => {
            if( LOG) {
                console.log( "DashboardHelper.findAddPostButton - just findElement getAddPostButtonExists()");
            }
            theResolve( browser.driver.findElement( this.dashboard.getAddPostButtonExists()));
        })
    }


    clickPostButton() {
        return new Promise( ( theResolve, theReject) => {
            if( LOG) {
                console.log( "DashboardHelper.clickPostButton - just getAddPostButton().click()");
            }
            this.dashboard.getAddPostButton().click()
                .then(
                    () => {
                        theResolve();
                    },
                    ( theError) => {
                        theReject( theError);
                    }
                );
        });
    }




    mustExistPostWithPostfix( thePostfix: string) {
        return new Promise<void>( (theResolve, theReject) => {
            if( LOG) {
                console.log( "DashboardHelper.mustExistPostWithPostfix - about to findPostsTableRowIndexWithPostfix( " + thePostfix + ")");
            }

            this.findPostsTableRowIndexWithPostfix( thePostfix)
                .then(
                    ( theRowIndex) => {
                        if( LOG) {
                            console.log( "DashboardHelper.mustExistPostWithPostfix - OK");
                        }
                        if( theRowIndex >= 0) {
                            theResolve();
                        }
                        else {
                            theReject();
                        }
                    },
                    ( theError) => {
                        if( LOG) {
                            console.log( "DashboardHelper.mustExistPostWithPostfix - ERROR on findPostsTableRowIndexWithTitle()");
                        }
                        theReject( theError);
                    }
                );
        });
    }



    findPostsTableRowIndexWithPostfix( thePostfix: string): Promise<number> {
        const aTitle = "Post Title " + thePostfix;
        if( LOG) {
            console.log( "DashboardHelper.mustExistPostWithPostfix - about to findPostsTableRowIndexWithTitle( " + aTitle + ")");
        }

        return this.findPostsTableRowIndexWithTitle( aTitle);
    }



    findPostsTableRowIndexWithTitle( theTitle: string): Promise<number> {
        return new Promise( ( theResolve, theReject) => {
            if( !theTitle) {
                theReject( "!theTitle");
                return;
            }

            const aCriteria = {
                "tableDomId":   "domid_posts_table",
                "pathToRows":   null,
                "rowDomName":   "mat-row",
                "pathToCells":  null,
                "cellDomName":  "mat-cell",
                "columnIndex":  1,
                "pathToValue":  null,
                "value":        theTitle,
                "trimValue":    true
            };

            this.rowIndexFinderHelper.callBrowser_RowIndexFinder( aCriteria)
                .then(
                    ( theRowIndex) => {
                        theResolve( theRowIndex);
                    },
                    ( theError)  => {
                        theReject( theError);
                    }
                );
        });
    }




    clickDeleteOnRowIndex_ExpectDialog( theRowIndex: number, theDialogMessage: string) {

        return new Promise( ( theResolve, theReject) => {

            let anErrorHasBeenLogged = false;

            if( LOG) {
                console.log( "DashboardHelper.clickDeleteOnRowIndex_ExpectDialog about to this.clickDeleteOnRowIndex( " + theRowIndex + ")");
            }

            this.clickDeleteOnRowIndex( theRowIndex)
                .then(
                    () =>  {
                        const anAlertDialog = protractor.browser.switchTo().alert();
                        expect( !( typeof anAlertDialog == "undefined") && !( anAlertDialog == null)).toBe( true);

                        if( !anAlertDialog) {
                            throw "ERROR alert expected and no alert shown";
                        }

                        if( LOG) {
                            console.log( "DashboardHelper.clickDeleteOnRowIndex_ExpectDialog about to anAlertDialog.accept()");
                        }

                        return new Promise( ( theResolve, theReject) => {
                            anAlertDialog.accept()  // Use to accept (simulate clicking ok)
                                .then(
                                    () => {
                                        if( LOG) {
                                            console.log( "DashboardHelper.clickDeleteOnRowIndex_ExpectDialog  - OK anAlertDialog.accept()");
                                        }
                                        theResolve();
                                    },
                                    ( theError) => {
                                        if( LOG) {
                                            console.log( "DashboardHelper.clickDeleteOnRowIndex_ExpectDialog  - ERROR on anAlertDialog.accept() " + theError);
                                        }
                                        theReject( theError);
                                    }
                                );
                        });
                        // alertDialog.dismiss();

                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "DashboardHelper.clickDeleteOnRowIndex_ExpectDialog about to this.clickDeleteOnRowIndex( " + theRowIndex + ")");
                        }
                        throw theError;
                    }
                )
                .then(
                    () =>  {
                        theResolve();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "DashboardHelper.clickDeleteOnRowIndex_ExpectDialog ERROR on anAlertDialog.accept() " + theError);
                        }
                        theReject( theError);
                    }
                );
        });
    }




    clickDeleteOnRowIndex( theRowIndex: number) {

        return new Promise( ( theResolve, theReject) => {

            let anErrorHasBeenLogged = false;

            if( LOG) {
                console.log( "DashboardHelper.clickDeleteOnRowIndex about to findDeleteOnRowIndexAnchor()");
            }

            this.findDeleteOnRowIndexAnchor( theRowIndex)
                .then(
                    ( theAnchor: WebElement): Promise<void> =>  {
                        if( LOG) {
                            console.log( "DashboardHelper.clickDeleteOnRowIndex about to theAnchor.click()");
                        }

                        return new Promise( ( otherResolve, otherReject) => {
                            theAnchor.click().then( ( ) => { otherResolve();}, (theError)=>{ otherReject( theError);});
                        });
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "DashboardHelper.clickDeleteOnRowIndex ERROR on findDeleteOnRowIndexAnchor() " + theError);
                        }
                        throw theError;
                    }
                )
                .then(
                    ( theAnchor) =>  {
                        if( LOG) {
                            console.log( "DashboardHelper.clickDeleteOnRowIndex - OK");
                        }
                        theResolve();
                    },
                    ( theError) => {
                        if( LOG && !anErrorHasBeenLogged) {
                            anErrorHasBeenLogged = true;
                            console.log( "DashboardHelper.clickDeleteOnRowIndex ERROR on theAnchor.click() " + theError);
                        }

                        theReject( theError);
                    }
                );
        });
    }




    findDeleteOnRowIndexAnchor( theRowIndex: number): Promise<WebElement> {

        return new Promise( ( theResolve, theReject) => {

            if( !( typeof theRowIndex == "number")) {
                theReject( "theRowIndex not a number");
                return;
            }

            if( theRowIndex < 0){
                theReject( "theRowIndex < 0");
                return;
            }


            const aDeleteAnchorDomId = "domid_post_delete_" + theRowIndex;

            if( LOG) {
                console.log( "DashboardHelper.findDeleteOnRowIndexAnchor - just findElement #" + aDeleteAnchorDomId);
            }
            browser.driver.findElement( by.id( aDeleteAnchorDomId))
                .then(
                    ( theAnchor: WebElement) => {
                        theResolve( theAnchor);
                    },
                    ( theError) => {
                        theReject( theError);
                    }
               );
        })
    }


}
