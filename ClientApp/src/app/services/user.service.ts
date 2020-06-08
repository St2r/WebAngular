import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

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
    this.getUserInfo('KaMui').subscribe(result => console.log(result[0]));
  }

  // 登陆
  public login(value: { username: string, password: string }) {
    this.http.post<boolean>(this.baseUrl + 'controller/user/login', value).subscribe(
      result => {
        if (result[0] === true) {
          this.status = true;
          this.username = value.username;
          this.loadUserInfo();
          return true;
        }
      }, error => {
        console.log(error);
        return false;
      });
    return false;
  }

  // 注册
  public register(value: { userName: string; email: string; password: string; confirm: string }) {
    this.http.post<boolean>(this.baseUrl + 'controller/user/register', value).subscribe(
      result => {
        console.log(result[0]);
        if (result[0]) {
          this.login({username: value.userName, password: value.password});
          console.log('没事吧');
          return true;
        }
      },
      error => {
        console.log(error);
      }
    );
    setTimeout(() => {
      return false;
    }, 2000);
  }

  // 登陆后将登陆用户的信息加载进来
  loadUserInfo() {
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

  // 获得某用户的一些信息
  public getUserInfo(username: string): Observable<{ nickname: string, avatarUrl: string }> {
    const model = {username: username};
    return this.http.post<{ nickname: string, avatarUrl: string }>
    (this.baseUrl + 'controller/user/get-user-info', model);
  }
}
