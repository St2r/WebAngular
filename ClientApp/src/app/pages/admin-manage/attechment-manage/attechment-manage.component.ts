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

  searchContent: string = "";

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.loadAttachmentInfo().then();
  }

  // 获取数据
  async loadAttachmentInfo() {
    this.attachment_list = await this.adminService.getAllAttachment();
    // this.attachment_list = [
      // new class implements AttachmentInfo {
      //   filename = "TestName";
      //   filesize = 100;
      //   filetype = ".doc";
      // }
    // ]
  }

  // TODO 下载目标附件
  download() {
    alert("申请下载");
  }

  // TODO 删除目标附件
  delete() {
    alert("删除附件");
  }

  cancel() {
    ;
  }

  // TODO 搜索功能
  search() {
    alert("搜索：" + this.searchContent);
  }
}
