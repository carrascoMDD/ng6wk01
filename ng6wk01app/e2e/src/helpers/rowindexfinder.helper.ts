import { browser, by, element } from 'protractor';

const LOG = true;

const SAMPLECRITERIA = {
    "tableDomId": "domid_posts_table",
    "UNUSED_tableDomName": "mat-table",
    "pathToRows": null,
    "rowDomName": "mat-row",
    "pathToCells": null,
    "cellDomName": "mat-cell",
    "columnIndex": 1,
    "pathToValue": null,
    "value": "Post Three",
    "trimValue": true
};

export class RowIndexFinderHelper {


    callBrowser_RowIndexFinder( theCriteria: Object) {

        return new Promise<number>( ( theResolve, theReject) => {


            if( !theCriteria) {
                if( LOG) {
                    console.log( "RowIndexFinderHelper.callBrowser_RowIndexFinder - !theCriteria");
                }

                theReject( "!theCriteria");
            }

            let aCriteriaJSONstr = null;
            let aCriteriaJSONprettystr = null;
            try {
                aCriteriaJSONstr = JSON.stringify( theCriteria);
                aCriteriaJSONprettystr = JSON.stringify( theCriteria, null, 4);
            }
            catch( anException){
                if( LOG) {
                    console.log( "RowIndexFinderHelper.callBrowser_RowIndexFinder - ERROR on JSON.stringify( theCriteria)" + anException);
                }
                theReject( "RowIndexFinderHelper.callBrowser_RowIndexFinder - ERROR on JSON.stringify( theCriteria)" + anException);
            }
            if( !aCriteriaJSONstr) {
                if( LOG) {
                    console.log( "RowIndexFinderHelper.callBrowser_RowIndexFinder - theCriteria NOT JSON");
                }
                theReject( "RowIndexFinderHelper.callBrowser_RowIndexFinder - theCriteria NOT JSON");
            }

            if( LOG) {
                console.log( "RowIndexFinderHelper.callBrowser_RowIndexFinder - about to browser.driver.executeScript() aScriptWithParms=\n" +
                             aCriteriaJSONprettystr + "\n");
            }

            const aScriptWithParms ="return RowIndexFinder( " + aCriteriaJSONstr + ");";
            browser.driver.executeScript( aScriptWithParms).then(
                ( athRowIndex) => {

                    if( typeof athRowIndex == "undefined") {
                        theReject( -1);
                    }

                    let aRowIndex = -1;
                    if( typeof athRowIndex == "number") {
                        aRowIndex = athRowIndex;
                    }
                    else {
                        try {
                            aRowIndex = parseInt( athRowIndex.toString());
                        }
                        catch( anException) {
                        }
                    }

                    theResolve( aRowIndex);
                },
                ( theError) =>  {
                    if( LOG) {
                        console.log( "RowIndexFinderHelper.callBrowser_RowIndexFinder - aScriptWithParms=\n" + aScriptWithParms + "\n");
                        console.log( "RowIndexFinderHelper.callBrowser_RowIndexFinder - ERROR on  browser.driver.executeScript()" + theError);
                    }
                    theReject( theError);
                }
            );
        });

    }


}
