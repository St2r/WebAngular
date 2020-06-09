import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {UserInfo} from '../model/user-info';

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

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.status = false;
    this.baseUrl = baseUrl;
    this.userInfo = new class implements UserInfo {
      loginCount: number;
      avatarUrl: string;
      birthday: string;
      brief: string;
      browse: number;
      fans: number;
      follow: number;
      like: number;
      nickname: string;
      point: number;
      registerData: string;
      star: number;
    };
  }

  // 登陆
  public login(value: { username: string, password: string, remember: boolean }): void {
    new Observable((observer: Observer<boolean>) => {
      this.http.post<boolean>(this.baseUrl + 'controller/user/login', value).subscribe(
        result => {
          observer.next(result[0]);
          observer.complete();
        }
      );
    }).subscribe(result => {
      if (result) {
        this.username = value.username;
        this.status = true;
        this.loadUserInfo();
      }
    });
  }

  // 注册
  // 异步调用
  public register(value: { userName: string; email: string; password: string; confirm: string }): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'controller/user/register', value);
  }

  // 登陆后将登陆用户的信息加载进来
  loadUserInfo(): void {
    this.getUserAllInfo(this.username).subscribe(
      result => {
        this.userInfo = result[0];
      });
  }

  // 获得某用户的昵称和头像信息（轻量级）
  // 异步调用
  public getUserBaseInfo(username: string): Observable<{ nickname: string, avatarUrl: string }> {
    const model = {username: username};
    return this.http.post<{ nickname: string, avatarUrl: string }>
    (this.baseUrl + 'controller/user/get-base-info', model);
  }

  // 获得某用户的全部信息
  // 异步调用
  public getUserAllInfo(username: string): Observable<UserInfo> {
    const model = {username: username};
    return this.http.post<UserInfo>
    (this.baseUrl + 'controller/user/get-all-info', model);
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
}
