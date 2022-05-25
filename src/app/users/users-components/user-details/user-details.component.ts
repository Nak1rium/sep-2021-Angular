import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { user } from '../../../models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: user;

  constructor(private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.data.subscribe(({data}) => this.user = data)
  }

}
