import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { post } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  private readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts():Observable<post[]>{
    return this.http.get<post[]>(this.url);
  }

  getPost(id: string): Observable<post> {
    return this.http
      .get<post>(this.url + '/' + id);
  }

}
