import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserDataService } from '../user-data.service';
import { user } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<user>{

  constructor(private  userService : UserDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<user> | Promise<user> | user {
    const {id} = route.params;
    return this.userService.getUser(id);
  }
}
