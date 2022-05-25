import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CommentDataService } from '../comment-data.service';
import { comment } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<comment>{

  constructor(private commentService: CommentDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<comment> | Promise<comment> | comment {
    const {id} = route.params;
    return this.commentService.getComment(id);
  }
}
