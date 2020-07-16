import {Component, OnInit, Input} from '@angular/core';
import {AttachmentInfo} from 'src/app/model/attachment';
import {FetchDataService} from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-attachment-res',
  templateUrl: './attachment-res.component.html',
  styleUrls: ['./attachment-res.component.css']
})
export class AttachmentResComponent implements OnInit {
  @Input()
  attachment_list: AttachmentInfo[];

  got_res: boolean;

  constructor(private fetchService: FetchDataService) {
  }

  ngOnInit() {
    if (this.attachment_list != null && this.attachment_list.length > 0) {
      this.got_res = true;
    } else {
      this.got_res = false;
    }
  }
}
