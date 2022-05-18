import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http : HttpClient) { }

  getUsers(): Observable<user[]> {
    return this.http
      .get<user[]>(this.url);
  }

}
