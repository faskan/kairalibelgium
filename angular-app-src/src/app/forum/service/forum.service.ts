import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Thread } from '../model/thread';
import { Post } from '../model/post';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { LoggedInUserService } from './logged-in-user.service';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private readonly HOST = 'https://slforum-xiosrv3ggq-uc.a.run.app/forum';
  //private readonly HOST = 'http://localhost:8080/forum';
  readonly THREADS_URL = this.HOST + '/topics';
  readonly COMMENTS_URL = this.HOST + '/comments';

  constructor(private httpClient: HttpClient,
              private loggedInUserService: LoggedInUserService,
              private socialAuthService: SocialAuthService) {
  }

  getAllThreads(): Observable<Thread[]> {
    return this.httpClient.get<Thread[]>(this.THREADS_URL);
  }

  getThread(threadId: string): Observable<Thread> {
    return this.httpClient.get<Thread>(this.THREADS_URL + '/' + threadId);
  }

  getAllPosts(threadId: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.COMMENTS_URL + '/' + threadId);
  }

  saveNewThread(thread: Thread): Observable<any> {
    this.socialAuthService.authState.subscribe(socialUser => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + socialUser.idToken
        })
      };
      return this.httpClient.post(this.THREADS_URL, thread, httpOptions).subscribe(response => console.log(response));
    });
    return of(false);
  }

  saveReply(post: Post): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.loggedInUserService.getIdToken()
      })
    };
    return this.httpClient.post(this.COMMENTS_URL, post, httpOptions);
  }

  reportComment(topicId: string, commentId: string, reason: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.loggedInUserService.getIdToken()
      })
    };
    return this.httpClient.post(this.HOST + '/report', {
      reportedTopicId: topicId,
      reportedCommentId: commentId,
      reason: reason
    }, httpOptions);
  }

  resolveModeration(commentId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.loggedInUserService.getIdToken()
      })
    };
    return this.httpClient.post(this.HOST + `/resolve-moderation/${commentId}`,
      {}, httpOptions);
  }
  deleteComment(commentId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.loggedInUserService.getIdToken()
      })
    };
    return this.httpClient.delete(this.COMMENTS_URL + '/' + commentId, httpOptions);
  }

  updateComment(commentId: string, threadId: string, content: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.loggedInUserService.getIdToken()
      })
    };
    return this.httpClient.put(this.COMMENTS_URL + '/' + commentId,
      {content: content, threadId: threadId}, httpOptions);
  }
}
