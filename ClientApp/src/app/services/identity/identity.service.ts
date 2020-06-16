import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private cookie: CookieService) {
    this.baseUrl = baseUrl;
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

  private requestLogin(username: string, password: string) {
    const i = new FormData();
    return this.http.post(this.baseUrl + 'api/identity/login', i, this.setAuthentication(username, password));
  }

  private requestRegister(username: string, password: string, email: string) {
    const i = new FormData();
    i.append('username', username);
    i.append('password', password);
    i.append('email', email);
    return this.http.post(this.baseUrl + 'api/identity/register', i);
  }

  public Login(username: string, password: string) {
    this.requestLogin(username, password).subscribe();
  }

  public Register(username: string, password: string, email: string) {
    this.requestRegister(username, password, email).subscribe(
      result => console.log(result['result'])
    );
  }
}
