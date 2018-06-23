import { browser, by, element } from 'protractor';






export class WelcomePage {
    navigateTo() {
        return browser.get( '/' );
    }




    getHeaderText() {
        return element( by.css( 'app-root h1' ) ).getText();
    }




    getDescriptionText() {
        return element.all( by.css( 'app-root p' )).get(0).getText();
    }

    getPromptText() {
        return element.all( by.css( 'app-root p' )).get(1).getText();
    }
}
