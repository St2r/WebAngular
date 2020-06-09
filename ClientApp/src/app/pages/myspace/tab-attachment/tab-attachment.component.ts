import { Component, OnInit, Input } from '@angular/core';
import {AttachmentInfo} from '../../../model/attachment'

@Component({
  selector: 'app-tab-attachment',
  templateUrl: './tab-attachment.component.html',
  styleUrls: ['./tab-attachment.component.css']
})
export class TabAttachmentComponent implements OnInit {
  @Input() viewing_own_page: boolean;

  my_attachment: AttachmentInfo[];

  constructor() { }

  ngOnInit() {
    this.loadAttachmentInfo();
  }

  loadAttachmentInfo() {
    this.my_attachment = [
      new class implements AttachmentInfo {
        filename = 'file 1';
        filesize = 1024;
        filetype = '.zip';
      },
      new class implements AttachmentInfo {
        filename = 'file 2';
        filesize = 1024;
        filetype = '.zip';
      },
      new class implements AttachmentInfo {
        filename = 'file 3';
        filesize = 1024;
        filetype = '.zip';
      },
    ]
  }

}
