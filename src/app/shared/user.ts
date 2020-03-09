import { UserLinks } from './user-links';
import { UserUser } from './user-user';


export interface User {
  id: number;
  name: string;
  surname: string;
  address: string;
  borrowed1: string;
  borrowed2: string;
  borrowed3: string;
  _links: UserLinks;
  user: UserUser;
}
