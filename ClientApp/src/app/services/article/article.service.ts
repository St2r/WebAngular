import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IdentityService} from '../identity/identity.service';
import {ArticleInfo} from '../../model/article-info';
import {ArticleContent} from '../../model/article-content';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private identityService: IdentityService) {
    this.baseUrl = baseUrl;
  }

  public newArticle(value: { author: string, title: string, tags: [...string[]], limit: string, content: string, cover: File })
    : Promise<boolean> {
    return new Promise<boolean>(
      resolve => {
        this.requestNewArticle(value).subscribe(
          result => resolve(result['result'])
        );
      }
    );
  }

  public viewArticle(articleId: number): Promise<{ info: ArticleInfo; content: ArticleContent }> {
    return new Promise<{ info: ArticleInfo, content: ArticleContent }>(
      resolve => {
        this.requestViewArticle(articleId).subscribe(
          result => resolve(result)
        );
      }
    );
  }

  public GetArticle(Block: string, Sort: string, Filter: string, PageSize: number, Page: number): Promise<ArticleInfo[]> {
    const i = new FormData();
    i.append('block', Block);
    i.append('sort', Sort);
    i.append('filter', Filter);
    i.append('pageSize', PageSize + '');
    i.append('page', Page + '');
    return this.http.post<ArticleInfo[]>(this.baseUrl + 'api/article/get', i, this.identityService.getAuthentication()).toPromise();
  }

  private requestNewArticle(value: { author: string, title: string, tags: [...string[]], limit: string, content: string, cover: File }) {
    const form = new FormData();
    form.append('author', value.author);
    form.append('title', value.title);
    form.append('tags', value.tags.join('/'));
    form.append('content', value.content);
    form.append('cover', value.cover);
    return this.http.post<boolean>(this.baseUrl + 'api/article/new', form, this.identityService.getAuthentication());
  }

  private requestViewArticle(articleId: number) {
    const form = new FormData();
    form.append('articleId', articleId + '');
    return this.http.post<{ info: ArticleInfo, content: ArticleContent }>
    (this.baseUrl + 'api/article/view', form, this.identityService.getAuthentication());
  }
}
