import { Component, OnInit } from '@angular/core';
import { AttachmentInfo } from 'src/app/model/attachment';

@Component({
  selector: 'app-attechment-manage',
  templateUrl: './attechment-manage.component.html',
  styleUrls: ['./attechment-manage.component.css']
})
export class AttechmentManageComponent implements OnInit {
  attachment_list: AttachmentInfo[];

  constructor() { }

  ngOnInit() {
    this.loadAttachmentInfo();
  }

// TODO 获取数据
  loadAttachmentInfo() {
    this.attachment_list = [
      new class implements AttachmentInfo {
        filename = 'filename';
        filesize = 123;
        filetype = '.doc';
      }
    ]
  }
}
