import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentDataService } from './comments-services/comment-data.service';
import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentComponent } from './comments-components/comment/comment.component';
import { CommentDetailsComponent } from './comments-components/comment-details/comment-details.component';
import { CommentResolveService } from './comments-services/resolvers/comment-resolve.service';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  providers: [
    CommentDataService,
    CommentResolveService
  ]
})
export class CommentsModule { }
