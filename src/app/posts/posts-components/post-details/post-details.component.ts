import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { post } from 'src/app/models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: post;

  constructor(private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.data.subscribe(({data}) => this.post = data)
  }

}
