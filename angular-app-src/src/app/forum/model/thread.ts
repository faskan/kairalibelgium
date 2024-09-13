import { User } from './user';

export interface Thread {
  id: string;
  createdByEmail: String
  lastModifiedByEmail: String
  createdAt: string;
  lastUpdatedAt: string;
  title: string | any;
  description: string;
}
