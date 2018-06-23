import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PostService} from '../data/post.service';

@Component({
               selector: 'app-post-dialog',
               templateUrl: './post-dialog.component.html',
               styleUrls: ['./post-dialog.component.css']
           })
export class PostDialogComponent {
    blogPost = {
        title: '',
        body: '',
        category: '',
        position: 0,
        date_posted: new Date()
    };
    public event: EventEmitter<any> = new EventEmitter();

    constructor(
        public dialogRef: MatDialogRef<PostDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public postService: PostService
    ) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        this.blogPost.position = this.postService.dataLength();
        this.event.emit({data: this.blogPost});
        this.dialogRef.close();
    }

    categories = this.postService.getCategories();
}
