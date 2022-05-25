import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users-components/users/users.component';
import { UserDataService } from './users-services/user-data.service';
import { UserComponent } from './users-components/user/user.component';
import { UserDetailsComponent } from './users-components/user-details/user-details.component';
import { UserResolveService } from './users-services/resolvers/user-resolve.service';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  providers: [
    UserDataService,
    UserResolveService
  ]
})
export class UsersModule { }
