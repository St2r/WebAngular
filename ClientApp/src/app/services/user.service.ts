import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {UserInfo} from '../model/user-info';
import {UserPrivateInfo} from '../model/user-private-info';
import {BlockInfo} from '../model/block-info';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private readonly baseUrl: string;

  // 当前登陆状态
  // false - 未登陆
  // true - 已登陆
  public status: boolean;

  // 已登陆用户的ID
  public username: string;

  // 已登陆用户的信息
  public userInfo: UserInfo;
  public userPrivateInfo: UserPrivateInfo;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private cookie: CookieService) {
    this.status = false;
    this.baseUrl = baseUrl;

    this.userInfo = new class implements UserInfo {
      articles: number;
      avatarUrl: string;
      brief: string;
      browse: number;
      fans: number;
      follow: number;
      isFan: boolean;
      isFollowed: boolean;
      level: number;
      like: number;
      nickname: string;
      point: number;
      star: number;
      username: string;
    };

    this.userPrivateInfo = new class implements UserPrivateInfo {
      birthday: string;
      loginCount: number;
      registerData: string;
      username: string;
    };

    if (sessionStorage.getItem('username')) {
      this.afterLogin(sessionStorage.getItem('username'));
    }

  }

  public getUserInfo() {
    return this.requestUserInfo(this.username);
  }

  public getUserPrivateInfo() {
    return this.requestUserPrivateInfo(this.username);
  }

  // 登陆
  public requestLogin(value: { username: string, password: string, remember: boolean }): Observable<boolean> {
    if (value.remember) {
      this.cookie.set('username', value.username);
    } else {
      this.cookie.delete('username');
    }
    return this.http.post<boolean>(this.baseUrl + 'controller/user/login', value);
  }

  // 登陆之后手动加载登陆数据到user-service
  public afterLogin(username: string) {
    this.username = username;
    this.status = true;
    this.loadUserInfo();
    sessionStorage.setItem('username', username);
  }

  // 退出登录
  public requestLogout() {
    return this.http.get<boolean>(this.baseUrl + 'controller/user/logout');
  }

  public afterLogout() {
    this.status = false;
    this.username = '';
    sessionStorage.clear();
  }

  // 注册
  // 异步调用
  public register(value: { username: string; email: string; password: string; confirm: string }): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'controller/user/register', value);
  }

  // 登陆后将登陆用户的信息加载进来
  loadUserInfo(): void {
    this.requestUserInfo(this.username).subscribe(
      result => {
        this.userInfo = result[0];
      });
    this.requestUserPrivateInfo(this.username).subscribe(
      result => {
        this.userPrivateInfo = result[0];
      });
  }

  // 获得某用户的信息
  // 异步调用
  public requestUserInfo(username: string): Observable<UserInfo> {
    const model = {username: username};
    return this.http.post<UserInfo>(this.baseUrl + 'controller/user/get-info', model);
  }

  // 获得某用户的私人信息
  // 异步调用
  public requestUserPrivateInfo(username: string): Observable<UserPrivateInfo> {
    const model = {username: username};
    return this.http.post<UserPrivateInfo>
    (this.baseUrl + 'controller/user/get-private-info', model);
  }

  // 检查用户名是否已被占用
  public requestCheckUsername(username: string): Observable<boolean> {
    const model = {username: username};
    return this.http.post<boolean>(this.baseUrl + 'controller/user/check-username', model);
  }

  // 检查邮箱是否已被占用
  public requestCheckEmail(email: string): Observable<boolean> {
    const model = {email: email};
    return this.http.post<boolean>(this.baseUrl + 'controller/user/check-email', model);
  }

  // 获得关注列表
  public requestFollowList(username: string): Observable<UserInfo[]> {
    const model = {username: username};
    return this.http.post<UserInfo[]>(this.baseUrl + 'controller/user/get-follow-list', model);
  }

  // 获得粉丝列表
  public requestFanList(username: string): Observable<UserInfo[]> {
    const model = {username: username};
    return this.http.post<UserInfo[]>(this.baseUrl + 'controller/user/get-fan-list', model);
  }

  // TODO 添加访问记录 username访问了targetName的主页
  public addVisitRecord(targetName: string, username: string): Observable<boolean> {
    return;
  }

  // TODO 获取最近访问者
  public getRecentVisiter(username: string): Observable<UserInfo[]> {
    return;
  }

  // TODO 获取收藏的板块
  public getFavBlock(username: string): Observable<BlockInfo[]> {
    return;
  }
}
