import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private requestComments(articleID: string): Observable<any> {
    const model = {articleID: articleID};
    return this.http.post<any>(this.baseUrl + 'controller/comment/get-comment', model);
  }

  public getComments(articleID: string): Promise<any> {
    return new Promise<any>(
      resolve => {
        this.requestComments(articleID).subscribe(
          result => {
            resolve(result[0]);
          }
        );
      }
    );
  }
}
