import {Component} from '@angular/core';
import {PostService} from '../data/post.service';
import {Post} from '../post';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';

@Component({
               selector: 'app-dashboard',
               templateUrl: './dashboard.component.html',
               styleUrls: ['./dashboard.component.css']
           })
export class DashboardComponent {
    constructor(private PostService: PostService) {
    }

    displayedColumns = ['date_posted', 'title', 'category', 'delete'];
    dataSource = new PostDataSource(this.PostService);
}

export class PostDataSource extends DataSource<any> {
    constructor(private PostService: PostService) {
        super();
    }

    connect(): Observable<Post[]> {
        return this.PostService.getData();
    }

    disconnect() {
    }
}
