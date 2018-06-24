import { browser, by, element, WebElement } from 'protractor';




export class Dashboard {

    navigateTo() {
        return browser.get( '/dashboard' );
    }


    getAddPostButtonExists() {
        return by.id( 'domid_addpost_button' );
    }

    getAddPostButton() {
        return element( this.getAddPostButtonExists());
    }


    getLoginToAddPostButtonExists() {
        return by.id( 'domid_logintoaddpost_anchor' );
    }

    getLoginToAddPostButton() {
        return element( this.getLoginToAddPostButtonExists());
    }


    hasAddPostButton() {
        return new Promise( ( theResolve, theReject) => {

            browser.driver.findElements( this.getAddPostButtonExists())
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
            theResolve( browser.driver.findElements( this.getAddPostButtonExists()));
        })
    }

    findAddPostButton() {
        return new Promise( ( theResolve, theReject) => {
            theResolve( browser.driver.findElement( this.getAddPostButtonExists()));
        })
    }


    clickPostButton() {
        return new Promise( ( theResolve, theReject) => {
            this.getAddPostButton().click()
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


}


