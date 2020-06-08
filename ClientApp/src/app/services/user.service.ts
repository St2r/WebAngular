import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';

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
  public nickname: string;
  public avatarUrl: string;

  birthday: string;
  registerData: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.status = false;
    this.baseUrl = baseUrl;
  }

  // 登陆
  // 异步调用
  public login(value: { username: string, password: string }): void {
    new Observable((observer: Observer<boolean>) => {
      this.http.post<boolean>(this.baseUrl + 'controller/user/login', value).subscribe(
        result => {
          console.log(result);
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
    this.http.get<{ nickname: string, avatarUrl: string, birthday: string, registerData: string }>
    (this.baseUrl + 'controller/user/load-user-info').subscribe(
      result => {
        this.nickname = result[0].nickname;
        this.avatarUrl = result[0].avatarUrl;
        this.birthday = result[0].birthday;
        this.registerData = result[0].registerData;
      },
      error => {
        console.log(error);
      }
    );
  }

  // 获得某用户的昵称和头像信息
  // 异步调用
  public getUserInfo(username: string): Observable<{ nickname: string, avatarUrl: string }> {
    const model = {username: username};
    return this.http.post<{ nickname: string, avatarUrl: string }>
    (this.baseUrl + 'controller/user/get-user-info', model);
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
