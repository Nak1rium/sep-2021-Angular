import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CommentDataService } from '../../comments-services/comment-data.service';
import { comment } from 'src/app/models';


@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: comment;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router,
              private commentService: CommentDataService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as comment;
      if (state) {
        this.comment = state
      } else {
        this.commentService.getComment(id).subscribe(value => this.comment = value);
      }
    })
  }

}
