import {Component, Input, OnInit} from '@angular/core';

import { comment } from '../../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: comment;

  constructor() { }

  ngOnInit(): void {
  }

}
