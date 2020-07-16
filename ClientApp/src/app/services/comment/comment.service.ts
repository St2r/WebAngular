import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IdentityService} from '../identity/identity.service';
import {CommentInfo} from '../../model/commentInfo';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,
              private identityService: IdentityService) {
    this.baseUrl = baseUrl;
  }

  public getComments(articleId: number, sort: string, filter: string): Promise<CommentInfo[]> {
    const i = new FormData();
    i.append('articleId', articleId + '');
    i.append('sort', sort);
    i.append('filter', filter);
    return this.http.post<CommentInfo[]>(this.baseUrl + 'api/comment/get-comment-list', i,
      this.identityService.getAuthentication()).toPromise();
  }
}
