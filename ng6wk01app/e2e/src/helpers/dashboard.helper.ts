import { browser, by, element } from 'protractor';

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
                console.log( "DashboardHelper.mustExistPostWithPostfix - about to findPostsTableRowWithTitle()");
            }

            this.findPostsTableRowWithTitle( "Post Title " + thePostfix)
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
                            console.log( "DashboardHelper.mustExistPostWithPostfix - ERROR on findPostsTableRowWithTitle()");
                        }
                        theReject( theError);
                    }
                );
        });
    }






    findPostsTableRowWithTitle( theTitle: string) {
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


}
