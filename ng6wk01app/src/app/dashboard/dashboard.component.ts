import { Component }   from '@angular/core';
import { PostService } from '../data/post.service';
import { Post }        from '../post';
import { DataSource }  from '@angular/cdk/table';
import { Observable }  from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import {MatDialog} from '@angular/material';

import {PostDialogComponent} from '../post-dialog/post-dialog.component';




@Component(
    {
        selector:    'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls:   [ './dashboard.component.css' ]
    } )
export class DashboardComponent {
    constructor( private dataService: PostService, public auth: AuthService, public dialog: MatDialog ) {
    }




    displayedColumns = [ 'date_posted', 'title', 'category', 'delete' ];
    dataSource       = new PostDataSource( this.dataService );




    deletePost( id ) {
        if( this.auth.isAuthenticated() ) {
            this.dataService.deletePost( id );
            this.dataSource = new PostDataSource( this.dataService );
        }
        else {
            alert( 'Login in Before' );
        }
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(PostDialogComponent, {
            width: '600px',
            data: 'Add Post'
        });
        dialogRef.componentInstance.event.subscribe((result) => {
            this.dataService.addPost(result.data);
            this.dataSource = new PostDataSource(this.dataService);
        });
    }
}






export class PostDataSource extends DataSource<any> {
    constructor( private PostService: PostService ) {
        super();
    }




    connect(): Observable<Post[]> {
        return this.PostService.getData();
    }




    disconnect() {
    }
}
