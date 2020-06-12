import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserInfo} from '../model/user-info';
import {UserPrivateInfo} from '../model/user-private-info';
import {BlockInfo} from '../model/block-info';

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

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.status = false;
    this.baseUrl = baseUrl;
    this.userInfo = new class implements UserInfo {
      username: string;
      avatarUrl: string;
      brief: string;
      browse: number;
      fans: number;
      level: number;
      articles: number;
      follow: number;
      like: number;
      nickname: string;
      point: number;
      star: number;
      isFan: boolean;
      isFollowed: boolean;
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

  // 登陆
  public login(value: { username: string, password: string, remember: boolean }): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'controller/user/login', value);
  }

  // 登陆之后手动加载登陆数据到user-service
  public afterLogin(username: string) {
    this.username = username;
    this.status = true;
    this.loadUserInfo();
    sessionStorage.setItem('username', username)
  }

  // 退出登录
  public logout() {
    this.http.get<boolean>(this.baseUrl + 'controller/user/logout').subscribe(
      result => {
        this.status = false;
        this.username = '';
      }
    );
    sessionStorage.clear();
  }

  // 注册
  // 异步调用
  public register(value: { username: string; email: string; password: string; confirm: string }): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'controller/user/register', value);
  }

  // 登陆后将登陆用户的信息加载进来
  loadUserInfo(): void {
    this.getUserInfo(this.username).subscribe(
      result => {
        this.userInfo = result[0];
      });
    this.getUserPrivateInfo(this.username).subscribe(
      result => {
        this.userPrivateInfo = result[0];
      });
  }

  // 获得某用户的信息
  // 异步调用
  public getUserInfo(username: string): Observable<UserInfo> {
    const model = {username: username};
    return this.http.post<UserInfo>
    (this.baseUrl + 'controller/user/get-info', model);
  }

  // 获得某用户的私人信息
  // 异步调用
  public getUserPrivateInfo(username: string): Observable<UserPrivateInfo> {
    const model = {username: username};
    return this.http.post<UserPrivateInfo>
    (this.baseUrl + 'controller/user/get-private-info', model);
  }

  // 检查用户名是否已被占用
  public checkUsername(username: string): Observable<boolean> {
    const model = {username: username};
    return this.http.post<boolean>(this.baseUrl + 'controller/user/check-username', model);
  }

  // 检查邮箱是否已被占用
  public checkEmail(email: string): Observable<boolean> {
    const model = {email: email};
    return this.http.post<boolean>(this.baseUrl + 'controller/user/check-email', model);
  }

  // 获得关注列表
  public getFollowList(username: string): Observable<UserInfo[]> {
    const model = {username: username};
    return this.http.post<UserInfo[]>(this.baseUrl + 'controller/user/get-follow-list', model);
  }

  // 获得粉丝列表
  public getFanList(username: string): Observable<UserInfo[]> {
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
