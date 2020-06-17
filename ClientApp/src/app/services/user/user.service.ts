import {Inject, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {UserInfo} from '../../model/user-info';
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

  public async getUserInfo(username: string): Promise<UserInfo> {
    return new Promise<UserInfo>(
      resolve => {
        this.requestUserInfo(username).subscribe(
          result => resolve(result[0])
        );
      }
    );
  }

  // 获得某用户的信息
  // 异步调用
  public requestUserInfo(username: string): Observable<UserInfo> {
    const model = {username: username};
    return this.http.post<UserInfo>(this.baseUrl + 'controller/user/get-info', model);
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

  // 获得关注列表
  public requestFollowList(username: string): Observable<UserInfo[]> {
    const model = {username: username};
    return this.http.post<UserInfo[]>(this.baseUrl + 'controller/user/get-follow-list', model);
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

  public async getFollowList(username: string): Promise<UserInfo[]> {
    return new Promise<UserInfo[]>(
      resolve => this.requestFollowList(username).subscribe(
        result => resolve(result)
      )
    );
  }

  // 获得粉丝列表
  public requestFanList(username: string): Observable<UserInfo[]> {
    const model = {username: username};
    return this.http.post<UserInfo[]>(this.baseUrl + 'controller/user/get-fan-list', model);
  }

  public async getFanList(username: string): Promise<UserInfo[]> {
    return new Promise<UserInfo[]>(
      resolve => this.requestFanList(username).subscribe(
        result => resolve(result)
      )
    );
  }

  // 添加访问记录 username访问了targetName的主页
  public requestVisitRecord(targetName: string, username: string): Observable<boolean> {
    const model = {targetName: targetName, username: username};
    return this.http.post<boolean>(this.baseUrl + 'controller/user/add-visit-record', model);
  }

  public async getVisitRecord(targetName: string, username: string): Promise<boolean> {
    return new Promise<boolean>(
      resolve => this.requestVisitRecord(targetName, username).subscribe(
        result => resolve(result)
      )
    );
  }

  // 获取最近访问者
  public requestRecentVisitor(username: string): Observable<UserInfo[]> {
    const model = {username: username};
    return this.http.post<UserInfo[]>(this.baseUrl + 'controller/user/get-recent-visitor', model);
  }

  public async getRecentVisitor(username: string): Promise<UserInfo[]> {
    return new Promise<UserInfo[]>(
      resolve => this.requestRecentVisitor(username).subscribe(
        result => resolve(result)
      )
    );
  }

  // 获取收藏的板块
  public requestFavBlock(username: string): Observable<BlockInfo[]> {
    const model = {username: username};
    return this.http.post<BlockInfo[]>(this.baseUrl + 'controller/user/get-fav-block', model);
  }

  public async getFavBlock(username: string): Promise<BlockInfo[]> {
    return new Promise<BlockInfo[]>(
      resolve => this.requestFavBlock(username).subscribe(
        result => resolve(result)
      )
    );
  }
}
