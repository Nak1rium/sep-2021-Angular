import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostDataService } from '../../posts-services/post-data.service';
import { post } from 'src/app/models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: post;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router,
              private postService: PostDataService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as post;
      if (state) {
        this.post = state
      } else {
        this.postService.getPost(id).subscribe(value => this.post = value);
      }
    })
  }

}
