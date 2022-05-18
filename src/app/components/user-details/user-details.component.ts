import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDetailsModel } from '../../models/userDetails.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails : UserDetailsModel;

  constructor(private activatedRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state:{data}} = history;
      this.userDetails = data as UserDetailsModel;
    })
  }

}
