import { Component, OnInit } from '@angular/core';

import { CommentDataService } from '../../comments-services/comment-data.service';
import { comment } from '../../../models';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: comment[];

  constructor(private commentDataService: CommentDataService) { }

  ngOnInit(): void {
    this.commentDataService.getComments().subscribe(value => this.comments = value);
  }

}
