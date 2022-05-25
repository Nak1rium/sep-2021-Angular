import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { comment } from 'src/app/models';


@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: comment;

  constructor(private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.data.subscribe(({data}) => this.comment = data)
  }

}
