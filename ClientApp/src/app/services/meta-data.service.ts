import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  public tags: [...string[]];
  public levels: [...string[]];

  constructor(private http: HttpClient) {
    this.getTags();
    this.getLevels();
  }

  // todo 请求后端
  private getTags(): void {
    this.tags = ['资源分享', '题目求助'];
  }

  //
  private getLevels(): void {
    this.levels = ['1', '2', '3', '4', '5', '6'];
  }
}
