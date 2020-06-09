import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ArticleInfo} from '../model/article-info';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // 根据条件获取数据
  // 异步调用
  public GetArticle(Block: string, Sort: string, Filter: string, PageSize: number, Page: number): Observable<ArticleInfo[]> {
    const form = {Block: Block, Sort: Sort, Filter: Filter, PageSize: PageSize, Page: Page};
    return this.http.post<ArticleInfo[]>(this.baseUrl + 'controller/article/get-article', form);
  }
}
