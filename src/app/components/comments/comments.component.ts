import { Component, OnInit } from '@angular/core';
import {IComment} from '../../models/IComment';
import {CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentsServices : CommentsService) { }

  ngOnInit(): void {
    this.commentsServices
      .getComments()
      .subscribe(response => this.comments = response)
  }

}
