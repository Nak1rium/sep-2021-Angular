import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PostDataService } from '../post-data.service';
import { post } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<post>{

  constructor(private postService: PostDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<post> | Promise<post> | post {
    const {id} = route.params;
    return this.postService.getPost(id);
  }
}
