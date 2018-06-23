import { browser, by, element } from 'protractor';

export class LoginAuth0 {

    getUserEmailExists() {
        return by.css( '#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(4) > div.auth0-lock-input-block.auth0-lock-input-email > div > input' );
    }

    getUserEmail() {
        return element( this.getUserEmailExists() );
    }


    getUserPasswordExists() {
        return by.css( '#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > div:nth-child(4) > div.auth0-lock-input-block.auth0-lock-input-show-password > div > div > input' );
    }


    getUserPassword() {
        return element( this.getUserPasswordExists() );
    }

    getLoginButtonExists() {
        return by.css( '#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > button' );
    }

    getLoginButton() {
        return element( this.getLoginButtonExists());
    }

    getLastLoginButtonExists() {
        return by.css( '#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div:nth-child(3) > span > div > div > div > div > div > div > div > div > button' );
    }

    getLastLoginButton() {
        return element( this.getLastLoginButtonExists());
    }



}


