import { User } from './user';

export interface Post {
  id: string;
  threadId: any;
  createdBy: User;
  lastModifiedBy: User;
  createdAt: string;
  lastUpdatedAt: string;
  content: string;
}
