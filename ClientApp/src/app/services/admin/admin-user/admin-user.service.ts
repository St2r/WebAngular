import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserBaseInfo} from '../../../model/user-base-info';
import {IdentityService} from '../../identity/identity.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private identityService: IdentityService) {
    this.baseUrl = baseUrl;
  }

  public GetAllUser(): Promise<UserBaseInfo[]> {
    return;
  }

  public EditUserInfo(): Promise<boolean> {
    return;
  }

  // 封禁用户
  // target为0是解禁，为1是禁言
  public banUser(username: string, target: number): Promise<boolean> {
    const i = new FormData();
    i.append('username', username);
    i.append('target', target + '');
    return this.http.post<boolean>(this.baseUrl + 'api/admin/user/ban', i,
      this.identityService.getAuthentication()).toPromise();
  }
}
