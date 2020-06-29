import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IdentityService} from '../identity/identity.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private identityService: IdentityService) {
    this.baseUrl = baseUrl;
  }

  //  获取附件的地址
  public getResource(resourceId: number): Promise<string> {
    const i = new FormData();
    i.append('resourceId', resourceId + '');
    return this.http.post<string>(this.baseUrl + 'api/resource/get', i,
      this.identityService.getAuthentication()).toPromise();
  }

  // 删除附件
  public deleteResource(resourceId: number): Promise<boolean> {
    const i = new FormData();
    i.append('resourceId', resourceId + '');
    return this.http.post<boolean>(this.baseUrl + 'api/resource/delete', i,
      this.identityService.getAuthentication()).toPromise();
  }
}
