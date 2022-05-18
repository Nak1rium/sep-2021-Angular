import { Component, Input, OnInit } from '@angular/core';

import { post } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: post;

  constructor() { }

  ngOnInit(): void {
  }

}
