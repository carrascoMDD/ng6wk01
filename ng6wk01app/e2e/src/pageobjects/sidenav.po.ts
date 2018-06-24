import { browser, by, element } from 'protractor';




/*
body > app-root > mat-sidenav-container > mat-sidenav-content > mat-toolbar > div:nth-child(2) > a
body > app-root > mat-sidenav-container > mat-sidenav-content > mat-toolbar > div:nth-child(3) > ul > li:nth-child(2) > a
body > app-root > mat-sidenav-container > mat-sidenav-content > mat-toolbar > div:nth-child(3) > ul > li:nth-child(2) > a > span
body > app-root > mat-sidenav-container > mat-sidenav-content > mat-toolbar > div:nth-child(3) > ul > li:nth-child(3) > a
body > app-root > mat-sidenav-container > mat-sidenav-content > mat-toolbar > div:nth-child(3) > ul > li:nth-child(4) > a
*/

export class Sidenav {

    navigateTo() {
        return browser.get( '/' );
    }


    getToolbarBlogLink() {
        return element( by.id( 'domid_blog_anchor' ));
    }


    getToolbarLinkHomeExists() {
        return by.id( 'domid_home_anchor' );
    }

    getToolbarLinkHome() {
        return element( this.getToolbarLinkHomeExists());
    }

    getToolbarLinkDashboardExists() {
        return by.id( 'domid_dashboard_anchor' );
    }

    getToolbarLinkDashboard() {
        return element( this.getToolbarLinkDashboardExists());
    }


    getToolbarLinkLoginExists() {
        return by.id( 'domid_login_anchor' );
    }

    getToolbarLinkLogin() {
        return element( this.getToolbarLinkLoginExists());
    }

    getToolbarLinkLogoutExists() {
        return by.id( 'domid_logout_anchor' );
    }

    getToolbarLinkLogout() {
        return element( this.getToolbarLinkLogoutExists());
    }
}


