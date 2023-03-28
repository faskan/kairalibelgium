import { User } from './user';

export interface Thread {
  id: string;
  createdBy: User;
  lastModifiedBy: User;
  createdAt: string;
  lastUpdatedAt: string;
  title: string | any;
  description: string;
}
