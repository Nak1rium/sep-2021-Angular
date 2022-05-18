import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { comment } from '../models/comment.model';
import {user} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<comment[]> {
    return this.http
      .get<comment[]>(this.url);
  }

  getComment(id: string): Observable<comment[]> {
    return this.http
      .get<comment[]>(this.url + '/' + id);
  }

}
