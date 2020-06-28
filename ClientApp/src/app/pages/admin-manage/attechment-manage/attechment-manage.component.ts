import { Component, OnInit } from '@angular/core';
import { AttachmentInfo } from 'src/app/model/attachment';
import {AdminService} from '../../../services/admin.service';
import { AttachmentService } from 'src/app/services/attachment.service';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-attechment-manage',
  templateUrl: './attechment-manage.component.html',
  styleUrls: ['./attechment-manage.component.css']
})
export class AttechmentManageComponent implements OnInit {
  attachment_list: AttachmentInfo[];

  searchContent: string = "";

  constructor(private adminService: AdminService, private attachService:AttachmentService, private fetchService:FetchDataService) { }

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

  // TODO 下载目标附件 具体待修改
  download(attachid:number) {
    this.attachService.getAttachment(attachid);
  }

  delete(attachid:number) {
    let res:boolean;
    res = this.attachService.deleteAttachment(attachid);
    if (res) {
      alert("资源删除成功");
    }
    else {
      alert("资源不存在")
    }

  }

  cancel() {
    ;
  }

  search() {
    if (this.searchContent!="") {
      this.fetchService.getAttachmentByKeyword(this.searchContent).subscribe(
        res => this.attachment_list=res
      );
    }
    else {
      this.loadAttachmentInfo();
    }
  }
}
