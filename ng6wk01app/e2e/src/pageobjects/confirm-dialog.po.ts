import { by, element } from 'protractor';




export class ConfirmDialog {


    getMessageExists() {
        return by.id( 'domid_message' );
    }

    getMessage() {
        return element( this.getMessageExists());
    }


    getOkButtonExists() {
        return by.id( 'domid_post_ok_button' );
    }

    getOkButton() {
        return element( this.getOkButtonExists());
    }


    getCancelButtonExists() {
        return by.id( 'domid_post_cancel_button' );
    }

    getCancelButton() {
        return element( this.getCancelButtonExists());
    }

}


