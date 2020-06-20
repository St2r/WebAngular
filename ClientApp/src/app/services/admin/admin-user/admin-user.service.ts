import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserBaseInfo} from '../../../model/user-base-info';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public GetAllUser(): Promise<UserBaseInfo[]> {
    return;
  }

  public EditUserInfo(): Promise<boolean> {
    return;
  }

  public BanUser(): Promise<boolean> {
    return;
  }
}
