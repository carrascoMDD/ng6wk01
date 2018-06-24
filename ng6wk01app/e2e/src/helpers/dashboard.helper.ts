import { browser, element } from 'protractor';

import { Dashboard } from "../pageobjects/dashboard.po";

const LOG = true;

export class DashboardHelper {

    dashboard = new Dashboard();

    hasAddPostButton() {
        return new Promise( ( theResolve, theReject) => {

            browser.driver.findElements( this.dashboard.getAddPostButtonExists())
                .then(
                    ( thePostButtons)=> {

                        theResolve( thePostButtons && thePostButtons.length ? true : false);
                    },
                    ( theError) => {
                        theReject( theError);
                    });
        })
    }


    findAddPostButtons() {
        return new Promise( ( theResolve, theReject) => {
            theResolve( browser.driver.findElements( this.dashboard.getAddPostButtonExists()));
        })
    }

    findAddPostButton() {
        return new Promise( ( theResolve, theReject) => {
            theResolve( browser.driver.findElement( this.dashboard.getAddPostButtonExists()));
        })
    }


    clickPostButton() {
        return new Promise( ( theResolve, theReject) => {
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





    findPostsTableRows() {
        return element( this.dashboard.getPostsTableRowsExists());
    }




}
