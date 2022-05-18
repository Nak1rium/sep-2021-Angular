import { Component, OnInit } from '@angular/core';

import { CommentsService } from '../../services/comments.service';
import { comment } from '../../models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: comment[];

  constructor(private commentsService : CommentsService) { }

  ngOnInit(): void {
    this.commentsService
      .getComments()
      .subscribe(response => this.comments = response);
  }
}
