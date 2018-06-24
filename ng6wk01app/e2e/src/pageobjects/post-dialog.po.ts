import { browser, by, element } from 'protractor';




export class PostDialog {


    getTitleExists() {
        return by.id( 'domid_post_title_input' );
    }

    getTitle() {
        return element( this.getTitleExists());
    }

    getBodyExists() {
        return by.id( 'domid_post_body_textarea' );
    }

    getBody() {
        return element( this.getBodyExists());
    }


    getCategoryExists() {
        return by.id( 'domid_post_category_select' );
    }

    getCategory() {
        return element( this.getCategoryExists());
    }


    getCategoryOptionExists( theOptionValue: number) {
        if( !theOptionValue) {
            return Promise.reject( null);
        }
        return by.id( "mat-option-" + theOptionValue);
    }

    getCategoryOption( theOptionValue: number) {
        return element( this.getCategoryOptionExists( theOptionValue));
    }


    getSaveButtonExists() {
        return by.id( 'domid_post_save_button' );
    }

    getSaveButton() {
        return element( this.getSaveButtonExists());
    }


    getCancelButtonExists() {
        return by.id( 'domid_post_cancel_button' );
    }

    getCancelButton() {
        return element( this.getCancelButtonExists());
    }

}


