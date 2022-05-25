import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users-components/users/users.component';
import { UserDetailsComponent } from './users-components/user-details/user-details.component';
import { UserResolveService } from './users-services/resolvers/user-resolve.service';

const routes: Routes = [
  {path:'',component: UsersComponent, children: [
      {path: ':id' , component: UserDetailsComponent,resolve: {data: UserResolveService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
