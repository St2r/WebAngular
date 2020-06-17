import { Component, OnInit, Input } from '@angular/core';
import {AttachmentInfo} from '../../../model/attachment';
import { UserService } from '../../../services/user/user.service';
import { FetchDataService } from '../../../services/fetch-data.service'

@Component({
  selector: 'app-tab-attachment',
  templateUrl: './tab-attachment.component.html',
  styleUrls: ['./tab-attachment.component.css']
})
export class TabAttachmentComponent implements OnInit {
  @Input() viewing_own_page: boolean;
  @Input() targetName: string;

  my_attachment: AttachmentInfo[];

  constructor(private userService: UserService, private fetchDataService: FetchDataService) { }

  ngOnInit() {
    this.loadAttachmentInfo();
  }

  loadAttachmentInfo() {
    // this.my_attachment = [
    //   new class implements AttachmentInfo {
    //     filename = 'file 1';
    //     filesize = 1024;
    //     filetype = '.zip';
    //   },
    //   new class implements AttachmentInfo {
    //     filename = 'file 2';
    //     filesize = 1024;
    //     filetype = '.zip';
    //   },
    //   new class implements AttachmentInfo {
    //     filename = 'file 3';
    //     filesize = 1024;
    //     filetype = '.zip';
    //   },
    // ]
    this.fetchDataService.getAttachmentByUser(this.targetName).subscribe(
      attachmment => this.my_attachment = attachmment
    );
  }

}
