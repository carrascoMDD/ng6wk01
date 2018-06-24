import { browser }    from "protractor";
import { post }       from "selenium-webdriver/http";
import { LoginHelper} from './helpers/login.helper'
import { PostHelper}  from './helpers/post.helper'
import { DashboardHelper}  from './helpers/dashboard.helper'

import { Dashboard} from './pageobjects/dashboard.po'
import { PostFragments } from './post.e2e-fragments'

const LOG = true;

describe( 'ng6wk01 add Post', () => {
    let dashboard: Dashboard;
    let dashboardHelper: DashboardHelper;
    let loginHelper: LoginHelper;
    let postHelper: PostHelper;
    let postFragments: PostFragments;

    beforeEach( () => {
        dashboard       = new Dashboard();
        loginHelper     = new LoginHelper();
        postHelper      = new PostHelper();
        dashboardHelper = new DashboardHelper();
        postFragments   = new PostFragments();
    } );


    it( 'should not add when logged out', (done) => {

        if( LOG) {
            console.log( "should not add when logged out - about to postHelper.newPostPostfix()");
        }

        let aPostfix = postHelper.newPostPostfix();
        postFragments.addPost( aPostfix)
            .then(
                ()=> {
                    if( LOG) {
                        console.log( "should add when logged in - OK");
                    }

                    done();
                },
                ( theError) => {
                    if( LOG) {
                        console.log( "should add when logged in - ERROR on postHelper.newPostPostfix() " + theError);
                    }
                    done.fail( theError);
                });
    } );

} );
