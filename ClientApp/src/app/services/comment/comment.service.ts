import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private requestComments(articleId: string, sort: string, filter: string): Observable<any> {
    const model = {articleId: articleId, sort: sort, filter: filter};
    return this.http.post<any>(this.baseUrl + 'controller/comment/get-comment', model);
  }

  public getComments(articleID: string, sort: string, filter: string): Promise<any> {
    return new Promise<any>(
      resolve => {
        this.requestComments(articleID, sort, filter).subscribe(
          result => {
            console.log(result);
            resolve(result);
          }
        );
      }
    );
  }
}
