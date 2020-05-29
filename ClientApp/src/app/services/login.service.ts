import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private logStatus: boolean;
  private loginUser: string;
  private baseUrl: string;

  const;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/text',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.logStatus = false;
    this.loginUser = '';
    this.baseUrl = baseUrl;
  }

  public isLogged(): boolean {
    return this.logStatus;
  }

  public login(userName: string, password: string) {
    const logModel: LogModel = {
      userName: 'testUser',
      password: 'testPwd',
    };
    this.http.post<string>(this.baseUrl + 'login', logModel, this.httpOptions).subscribe(
      result => {
        if (result[0] === 'hello') {
          this.loginUser = userName;
          this.logStatus = true;
        }
      }, error => console.log(error));
    console.log(userName);
  }

  public getUserImage(): string {
    // if (this.loginUser === '') {
    //   return null;
    // }
    // let imgUrl: string = null;
    // this.http.post<string>(this.baseUrl + 'login', 'none', this.httpOptions).subscribe(
    //   result => imgUrl = result, error => console.log(error));
    return '//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  }

  public getUserName(): string {
    return '李昂';
  }
}

interface LogModel {
  userName: string;
  password: string;
}
