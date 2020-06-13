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

  public requestLike(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/like', model);
  }

  public requestUndoLike(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/undo-like', model);
  }

  public requestDislike(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/dislike', model);
  }

  public requestUndoDislike(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/undo-dislike', model);
  }

  public requestFollow(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/follow', model);
  }

  public requestDisFollow(username: string, targetName: string): Observable<boolean> {
    const model = {username: username, targetName: targetName};
    return this.http.post<boolean>(this.baseUrl + 'controller/operation/dis-follow', model);
  }
}
