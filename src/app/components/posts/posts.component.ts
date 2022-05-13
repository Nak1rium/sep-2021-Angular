import { Component, OnInit } from '@angular/core';
import {IPost} from '../../models/IPost';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postsServices: PostsService) { }

  ngOnInit(): void {
    this.postsServices
      .getPosts()
      .subscribe(response => this.posts = response)
  }

}
