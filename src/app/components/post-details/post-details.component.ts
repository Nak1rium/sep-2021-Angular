import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostDetailsModel } from '../../models/posrDetails.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails : PostDetailsModel;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state:{data}} = history;
      this.postDetails = data as PostDetailsModel;
    })
  }

}
