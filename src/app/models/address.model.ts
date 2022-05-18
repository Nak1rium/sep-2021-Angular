import { geo } from './geo.model';

export interface address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: geo
}
