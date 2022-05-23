import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDataService } from '../../users-services/user-data.service';
import { user } from '../../../models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: user;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router,
              private userService: UserDataService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as user;
      if (state) {
        this.user = state
      } else {
        this.userService.getUser(id).subscribe(value => this.user = value);
      }
    })
  }

}
