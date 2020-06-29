import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private readonly baseUrl: string;

  public logged: boolean;
  public username: string;

  // 根据登录用户的实际信息更新 isAdmin, 以及持久化
  public visitAsAdmin: boolean;
  public isAdmin: boolean;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private cookie: CookieService) {
    this.baseUrl = baseUrl;
    this.logged = false;
    this.isAdmin = false;
    this.visitAsAdmin = false;

    if (cookie.check('username')) {
      this.username = cookie.get('username');
      this.isAdmin = cookie.get('isAdmin') === 'true';
      this.logged = true;
    }
  }

  public getAuthentication(): { headers: HttpHeaders } {
    const headerDict = {
      username: this.cookie.get('username'),
      password: this.cookie.get('password')
    };
    return {
      headers: new HttpHeaders(headerDict)
    };
  }

  public setAuthentication(username: string, password: string): { headers: HttpHeaders } {
    const headerDict = {
      username: username,
      password: password
    };
    return {
      headers: new HttpHeaders(headerDict)
    };
  }


  public async login(username: string, password: string, remember: boolean): Promise<any> {
    if (remember) {
      this.cookie.set('backup_username', username);
    } else {
      this.cookie.delete('backup_username');
    }

    return new Promise<any>(
      resolve => {
        this.requestLogin(username, password).subscribe(
          next => {
            if (next['result']) {
              this.afterLogin(username, password, next['isAdmin']);
            }
            resolve(next['result']);
          }
        );
      }
    );
  }

  public async logout() {
    return new Promise<boolean>(
      resolve => {
        this.requestLogout().subscribe(
          result => {
            if (result['result']) {
              this.afterLogout();
            }
            resolve(result['result']);
          }
        );
      }
    );
  }

  public async register(username: string, password: string, email: string) {
    return new Promise<boolean>(
      resolve => {
        this.requestRegister(username, password, email).subscribe(
          result => resolve[result['result']]
        );
      }
    );
  }

  public async checkEmail(email: string) {
    return new Promise<boolean>(
      resolve => {
        this.requestCheckEmail(email).subscribe(
          result => {
            resolve(result['result']);
          }
        );
      }
    );
  }

  public async checkUsername(username: string) {
    return new Promise<boolean>(
      resolve => {
        this.requestCheckUsername(username).subscribe(
          result => {
            resolve(result['result']);
          }
        );
      }
    );
  }

  private requestLogin(username: string, password: string) {
    const i = new FormData();
    return this.http.post(this.baseUrl + 'api/identity/login', i, this.setAuthentication(username, password));
  }

  private requestLogout() {
    return this.http.post(this.baseUrl + 'api/identity/logout', new FormData(), this.getAuthentication());
  }

  private requestRegister(username: string, password: string, email: string) {
    const i = new FormData();
    i.append('email', email);
    return this.http.post(this.baseUrl + 'api/identity/register', i, this.setAuthentication(username, password));
  }

  public requestCheckEmail(email: string) {
    const i = new FormData();
    i.append('email', email);
    return this.http.post(this.baseUrl + 'api/identity/check-email', i);
  }

  public requestCheckUsername(username: string) {
    const i = new FormData();
    i.append('username', username);
    return this.http.post(this.baseUrl + 'api/identity/check-username', i);
  }

  private afterLogin(username: string, password: string, isAdmin: boolean) {
    this.username = username;
    this.logged = true;
    this.isAdmin = isAdmin;
    this.cookie.set('username', username);
    this.cookie.set('password', password);
    this.cookie.set('isAdmin', isAdmin + '');
  }

  private afterLogout() {
    this.logged = false;
    this.username = '';
    this.cookie.delete('username');
    this.cookie.delete('password');
    this.cookie.delete('isAdmin');
  }
}
