import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentsService } from '../../services/comments.service';
import { commentDetails } from '../../models/commentDetails.model';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails : commentDetails[];

  constructor(private activatedRoute : ActivatedRoute,
              private commentsService : CommentsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentsService.getComment(id).subscribe(response => this.commentDetails = response);
    });
  }

}
