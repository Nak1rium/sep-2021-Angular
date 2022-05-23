import { Component, OnInit } from '@angular/core';

import { PostDataService } from '../../posts-services/post-data.service';
import { post } from '../../../models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: post[];

  constructor(private postDataService : PostDataService) { }

  ngOnInit(): void {
    this.postDataService.getPosts().subscribe(value => this.posts = value);
  }

}
