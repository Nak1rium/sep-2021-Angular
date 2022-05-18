import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { user } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: user[];

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService
      .getUsers()
      .subscribe(response => this.users = response);
  }

}
