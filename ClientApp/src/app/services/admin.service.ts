import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInfo} from '../model/user-info';
import {AttachmentInfo} from '../model/attachment';
import {ArticleInfo} from '../model/article-info';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private requestAllUser() {
    return this.http.get<UserInfo[]>(this.baseUrl + 'controller/admin/get-user');
  }

  public async getAllUser() {
    return new Promise<UserInfo[]>(
      resolve => this.requestAllUser().subscribe(
        result => resolve(result)
      )
    );
  }

  private requestAllAttachment() {
    return this.http.get<AttachmentInfo[]>(this.baseUrl + 'controller/admin/get-attachment');
  }

  public async getAllAttachment() {
    return new Promise<AttachmentInfo[]>(
      resolve => this.requestAllAttachment().subscribe(
        result => resolve(result)
      )
    );
  }

  private requestAllArticle() {
    return this.http.get<ArticleInfo[]>(this.baseUrl + 'controller/admin/get-article');
  }

  public async getAllArticle() {
    return new Promise<ArticleInfo[]>(
      resolve => this.requestAllArticle().subscribe(
        result => resolve(result)
      )
    );
  }
}
