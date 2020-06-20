import {Component, OnInit, Input} from '@angular/core';
import {AttachmentInfo} from 'src/app/model/attachment';
import {FetchDataService} from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-attachment-res',
  templateUrl: './attachment-res.component.html',
  styleUrls: ['./attachment-res.component.css']
})
export class AttachmentResComponent implements OnInit {
  @Input() search_content: string;

  attachment_list: AttachmentInfo[];

  got_res: boolean;

  constructor(private fetchService: FetchDataService) {
  }

  ngOnInit() {
    this.loadAttachmentInfo();
    if (this.attachment_list.length > 0) {
      this.got_res = true;
    } else {
      this.got_res = false;
    }
  }

  loadAttachmentInfo() {
    this.fetchService.getAttachmentByKeyword(this.search_content).subscribe(
      res => this.attachment_list = res
    );
  }

}
