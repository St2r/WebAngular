import {Inject, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {BlockInfo} from '../../model/block-info';
import {CookieService} from 'ngx-cookie-service';
import {IdentityService} from '../identity/identity.service';
import {UserBaseInfo} from '../../model/user-base-info';
import {UserDetailInfo} from '../../model/user-detail-info';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private identityService: IdentityService) {
    this.baseUrl = baseUrl;
  }

  ngOnInit(): void {
  }

  public async getBaseInfo(username: string): Promise<UserBaseInfo> {
    return new Promise(
      resolve => {
        this.requestUserBaseInfo(username).subscribe(
          result => {
            resolve(result);
          }
        );
      }
    );
  }

  public async getDetailInfo(username: string): Promise<UserDetailInfo> {
    return new Promise(
      resolve => {
        this.requestUserDetailInfo(username).subscribe(
          result => {
            resolve(result);
          }
        );
      }
    );
  }

  private requestUserBaseInfo(username: string) {
    const i = new FormData();
    i.append('username', username);
    return this.http.post<UserBaseInfo>(this.baseUrl + 'api/user/base-info', i, this.identityService.getAuthentication());
  }

  private requestUserDetailInfo(username: string) {
    const i = new FormData();
    i.append('username', username);
    return this.http.post<UserDetailInfo>(this.baseUrl + 'api/user/detail-info', i, this.identityService.getAuthentication());
  }

  public async getFollowList(username: string): Promise<UserBaseInfo[]> {
    const i = new FormData();
    i.append('username', username);
    return this.http.post<UserBaseInfo[]>(this.baseUrl + 'api/user/get-follow-list', i,
      this.identityService.getAuthentication()).toPromise();
  }

  public async getFanList(username: string): Promise<UserBaseInfo[]> {
    const i = new FormData();
    i.append('username', username);
    return this.http.post<UserBaseInfo[]>(this.baseUrl + 'api/user/get-fan-list', i,
      this.identityService.getAuthentication()).toPromise();
  }

  // 添加访问记录 username访问了targetName的主页
  public requestVisitRecord(targetName: string, username: string): Observable<boolean> {
    const model = {targetName: targetName, username: username};
    return this.http.post<boolean>(this.baseUrl + 'controller/user/add-visit-record', model);
  }

  public async getVisitRecord(username: string): Promise<boolean> {
    const i = new FormData();
    i.append('username', username);
    return this.http.post<boolean>(this.baseUrl + 'controller/user/add-visit-record', i,
      this.identityService.getAuthentication()).toPromise();
  }


  public async getRecentVisitor(username: string): Promise<UserBaseInfo[]> {
    const i = new FormData();
    i.append('username', username);
    return this.http.post<UserBaseInfo[]>(this.baseUrl + 'api/user/get-recent-visitor', i,
      this.identityService.getAuthentication()).toPromise();
  }

  // 获取收藏的板块
  public requestFavBlock(username: string): Observable<BlockInfo[]> {
    const model = {username: username};
    return this.http.post<BlockInfo[]>(this.baseUrl + 'api/user/get-fav-block', model);
  }

  public async getFavBlock(username: string): Promise<BlockInfo[]> {
    return new Promise<BlockInfo[]>(
      resolve => this.requestFavBlock(username).subscribe(
        result => resolve(result)
      )
    );
  }
}
