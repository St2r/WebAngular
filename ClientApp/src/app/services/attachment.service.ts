import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  constructor() { }

  // TODO 获取附件 返回地址？
  public getAttachment(attachmentid:number): string {
    return ;
  }

  // TODO 删除附件
  public deleteAttachment(attachmentid:number): boolean {
    return;
  }
}
