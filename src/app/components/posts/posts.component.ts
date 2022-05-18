import { Component, OnInit } from '@angular/core';

import { post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: post[];

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.postsService
      .getPosts()
      .subscribe(response => this.posts = response);
  }

}
