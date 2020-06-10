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

  //TODO 获取用户上传的附件信息
  public getAttachmentByUser(username: string): Observable<AttachmentInfo[]> {
    return;
  }

  // TODO 获取用户发布的帖子
  public getInvitationByUser(username: string): Observable<ArticleInfo[]> {
    return;
  }

  // TODO 获取用户star的帖子
  public getStarArticleByUser(username:string): Observable<ArticleInfo[]> {
    return;
  }

  // TODO 获取与用户相关的动态
  public getPostByUser(username: string): Observable<PostInfo[]> {
    return;
  }
}
