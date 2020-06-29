import {Component, OnInit} from '@angular/core';
import {AttachmentInfo} from 'src/app/model/attachment';
import {AdminService} from '../../../services/admin.service';
import {FetchDataService} from 'src/app/services/fetch-data.service';
import {ResourceService} from '../../../services/resource/resource.service';

@Component({
  selector: 'app-attechment-manage',
  templateUrl: './attechment-manage.component.html',
  styleUrls: ['./attechment-manage.component.css']
})
export class AttechmentManageComponent implements OnInit {
  attachment_list: AttachmentInfo[];

  searchContent;
  '';

  constructor(private adminService: AdminService, private resourceService: ResourceService, private fetchService: FetchDataService) {
  }

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
  async download(attachid: number) {
    await this.resourceService.getResource(attachid);
  }

  async delete(attachid: number) {
    let res: boolean;
    res = await this.resourceService.deleteResource(attachid);
    if (res) {
      alert('资源删除成功');
    } else {
      alert('资源不存在');
    }

  }

  cancel() {
  }

  async search() {
    if (this.searchContent !== '') {
      this.attachment_list = await this.fetchService.getAttachmentByKeyword(this.searchContent);
    } else {
      await this.loadAttachmentInfo();
    }
  }
}
