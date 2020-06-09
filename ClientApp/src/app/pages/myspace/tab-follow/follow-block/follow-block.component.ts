import { Component, OnInit } from '@angular/core';
import { BlockInfo, Master } from '../../../../model/block'

@Component({
  selector: 'app-follow-block',
  templateUrl: './follow-block.component.html',
  styleUrls: ['./follow-block.component.css']
})
export class FollowBlockComponent implements OnInit {

  follow_block: BlockInfo[];

  constructor() { }

  ngOnInit() {
    this.loadBlockInfo();
  }

  loadBlockInfo() {
    this.follow_block = [
      new class implements BlockInfo {
        block_name = 'test block'
        accessRight = 2;
        followed = true;
        contentTotal = 20;
        followTotal = 2;
        todayTotal = 20;
        masters = [
          new class implements Master {
            userId = 'test master';
            avatarUrl = 'fack url';
          },
          new class implements Master {
            userId = 'test master';
            avatarUrl = 'fack url';
          },
        ]
      }
    ]
  }

}
