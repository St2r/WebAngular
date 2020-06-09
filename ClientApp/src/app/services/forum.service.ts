import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlockInfo} from '../model/block-info';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // 获取板块信息
  public GetBlockInfo(Block: string): Observable<BlockInfo> {
    const form = {Block: Block};
    return this.http.post<BlockInfo>(this.baseUrl + 'controller/forum/get-block-info', form);
  }
}
