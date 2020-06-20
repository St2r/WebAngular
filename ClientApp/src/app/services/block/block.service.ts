import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IdentityService} from '../identity/identity.service';
import {BlockInfo} from '../../model/block-info';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private identityService: IdentityService) {
    this.baseUrl = baseUrl;
  }

  public getBlockInfo(blockName: string): Promise<BlockInfo> {
    const i = new FormData();
    i.append('blockName', blockName);
    return this.http.post<BlockInfo>(this.baseUrl + 'api/block/block-info', i, this.identityService.getAuthentication()).toPromise();
  }
}
