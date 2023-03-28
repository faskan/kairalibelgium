import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Thread } from '../model/thread';
import { Post } from '../model/post';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  readonly THREADS_URL = 'https://slforum-xiosrv3ggq-uc.a.run.app/forum/threads';
  readonly POSTS_URL = 'https://slforum-xiosrv3ggq-uc.a.run.app/forum/posts';

  constructor(private httpClient: HttpClient,
              private socialAuthService: SocialAuthService) { }

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
    this.socialAuthService.authState.subscribe(socialUser => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Bearer ' + socialUser.idToken
        })
      };
      return this.httpClient.post(this.THREADS_URL, thread, httpOptions).subscribe(response => console.log(response));
    });
    return of(false);
  }

  saveReply(post: Post): Observable<any> {
    this.socialAuthService.authState.subscribe(socialUser => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Bearer ' + socialUser.idToken
        })
      };
      return this.httpClient.post(this.POSTS_URL, post, httpOptions).subscribe(response => console.log(response));
    });
    return of(false);
  }
}
