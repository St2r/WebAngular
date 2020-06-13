import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';
import { AttachmentInfo } from 'src/app/model/attachment';

@Component({
  selector: 'app-attachment-res',
  templateUrl: './attachment-res.component.html',
  styleUrls: ['./attachment-res.component.css']
})
export class AttachmentResComponent implements OnInit {
  @Input() search_content:string;

  attachment_list:AttachmentInfo[];

  constructor() { }

  ngOnInit() {
    this.loadAttachmentInfo();
  }

  // TODO 获取信息
  loadAttachmentInfo() {

  }

}
