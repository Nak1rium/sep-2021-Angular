import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { urls } from '../contants';
import { car } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  create(car: car): Observable<car> {
    return  this.http.post<car>(urls.cars, car)
  }

  getAll(): Observable<car[]> {
    return this.http.get<car[]>(urls.cars)
  }

  getById(id: number): Observable<car> {
    return this.http.get<car>(`${urls.cars}/${id}`)
  }

  deleteById(id:number): Observable<void> {
    return this.http.delete<void>(`${urls.cars}/${id}`)
  }

  updateById(id: number, carForUpdate:Partial <car>): Observable<car>{
    return this.http.patch<car>(`${urls.cars}/${id}` , carForUpdate)
  }

}
