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


    getPostsTablesExists() {
        return by.id( 'domid_posts_table' );
    }

    getPostsTables() {
        return element( this.getPostsTablesExists());
    }


    getPostsTableRowsExists() {
        return by.css( '#domid_posts_table mat-row' );
    }


}


