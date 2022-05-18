import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) { }

  getPosts(): Observable<post[]>{
    return this.http
      .get<post[]>(this.url);
  }

}
