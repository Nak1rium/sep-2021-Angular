import { company } from './company.model';
import { address } from './address.model';

export interface user {
  id: number,
  name: string,
  username: string,
  email: string,
  address: address,
  phone: string,
  website: string,
  company: company
}
