import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public requestLikeArticle(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/like-article', model);
  }

  public requestUndoLikeArticle(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/undo-like-article', model);
  }

  public requestDislikeArticle(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/dislike-article', model);
  }

  public requestUndoDislikeArticle(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/undo-dislike-article', model);
  }




  public requestLikeComment(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/like-comment', model);
  }

  public requestUndoLikeComment(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/undo-like-comment', model);
  }

  public requestDislikeComment(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/dislike-comment', model);
  }

  public requestUndoDislikeComment(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/undo-dislike-comment', model);
  }



  public requestFollowPerson(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/follow-person', model);
  }

  public requestDisFollowPerson(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/dis-follow-person', model);
  }

  public requestFollowBlock(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/follow-block', model);
  }

  public requestDisFollowBlock(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/dis-follow-block', model);
  }
}
