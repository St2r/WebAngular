import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ArticleInfo} from '../model/article-info';
import {HttpClient} from '@angular/common/http';
import { AttachmentInfo } from '../model/attachment';
import { PostInfo } from '../model/post-info';

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

  // TODO 获取用户上传的附件信息
  public getAttachmentByUser(username: string): Observable<AttachmentInfo[]> {
    return;
  }

  private requestArticleByUser(username: string): Observable<ArticleInfo[]> {
    const model = {username: username};
    return this.http.post<ArticleInfo[]>(this.baseUrl + 'controller/fetch/post-article', model);
  }
  // 获取用户发布的帖子
  public async getInvitationByUser(username: string): Promise<ArticleInfo[]> {
    return new Promise<ArticleInfo[]>(
      resolve => this.requestArticleByUser(username).subscribe(
        result => resolve(result)
      )
    );
  }

  // 获取用户收藏的帖子
  private requestStarArticleByUser(username: string): Observable<ArticleInfo[]> {
    const model = {username: username};
    return this.http.post<ArticleInfo[]>(this.baseUrl + 'controller/fetch/star-article', model);
  }
  public getStarArticleByUser(username: string): Promise<ArticleInfo[]> {
    return new Promise<ArticleInfo[]>(
      resolve => this.requestStarArticleByUser(username).subscribe(
        result => resolve(result)
      )
    );
  }

  // 获取与用户相关的动态
  public requestPostByUser(username: string): Observable<PostInfo[]> {
    const model = {username: username};
    return this.http.post<PostInfo[]>(this.baseUrl + 'controller/fetch/get-post', model);
  }
  public getPostByUser(username: string): Promise<PostInfo[]> {
    return new Promise<PostInfo[]>(
      resolve => this.requestPostByUser(username).subscribe(
        result => resolve(result)
      )
    );
  }
}
