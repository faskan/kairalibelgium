import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thread } from '../model/thread';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  readonly THREADS_URL = 'https://slforum-xiosrv3ggq-uc.a.run.app/forum/threads';
  readonly POSTS_URL = 'https://slforum-xiosrv3ggq-uc.a.run.app/forum/posts';

  constructor(private httpClient: HttpClient) { }

  getAllThreads(): Observable<Thread[]>{
    return this.httpClient.get<Thread[]>(this.THREADS_URL);
  }

  getThread(threadId: string): Observable<Thread>{
    return this.httpClient.get<Thread>(this.THREADS_URL + '/' + threadId);
  }

  getAllPosts(threadId: string): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.POSTS_URL + '/' + threadId);
  }

  saveNewThread(thread: Thread): Observable<any> {
    return this.httpClient.post(this.THREADS_URL, thread);
  }

  saveReply(post: Post): Observable<any> {
    return this.httpClient.post(this.POSTS_URL, post);
  }
}
