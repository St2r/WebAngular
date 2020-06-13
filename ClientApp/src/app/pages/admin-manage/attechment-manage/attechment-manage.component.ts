import { Component, OnInit } from '@angular/core';
import { AttachmentInfo } from 'src/app/model/attachment';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-attechment-manage',
  templateUrl: './attechment-manage.component.html',
  styleUrls: ['./attechment-manage.component.css']
})
export class AttechmentManageComponent implements OnInit {
  attachment_list: AttachmentInfo[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadAttachmentInfo().then();
  }

  // 获取数据
  async loadAttachmentInfo() {
    this.attachment_list = await this.adminService.getAllAttachment();
  }
}
