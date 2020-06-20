import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AttachmentInfo} from '../model/attachment';
import {ArticleInfo} from '../model/article-info';
import {UserBaseInfo} from '../model/user-base-info';
import {IdentityService} from './identity/identity.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,
              private identityService: IdentityService) {
    this.baseUrl = baseUrl;
  }

  public async getAllUser(): Promise<UserBaseInfo[]> {
    return this.http.get<UserBaseInfo[]>(this.baseUrl + 'controller/admin/get-user',
      this.identityService.getAuthentication()).toPromise();
  }

  public async getAllAttachment(): Promise<AttachmentInfo[]> {
    return this.http.get<AttachmentInfo[]>(this.baseUrl + 'controller/admin/get-attachment',
      this.identityService.getAuthentication()).toPromise();
  }

  public async getAllArticle(): Promise<ArticleInfo[]> {
    return this.http.get<ArticleInfo[]>(this.baseUrl + 'controller/admin/get-article',
      this.identityService.getAuthentication()).toPromise();
  }
}
