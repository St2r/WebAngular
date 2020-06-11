import { Component, OnInit } from '@angular/core';
import { BlockInfo, AdminInfo} from '../../../../model/block-info';

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

  // TODO 废止可能？
  loadBlockInfo() {
    this.follow_block = [
      new class implements BlockInfo {
        blockName = 'test block'
        accessRight = 2;
        avatarUrl = '/avatar.png';
        isFollowed = true;
        contentTotal = 20;
        followTotal = 2;
        todayTotal = 20;
        admins = [
          // new class implements AdminInfo {
          //   username = 'test master';
          //   nickname = 'nick1';
          //   avatarUrl = 'fack url';
          //   identity = 1;
          // },
          // new class implements AdminInfo {
          //   username = 'test master';
          //   avatarUrl = 'fack url';
          //   avatarUrl = 'fack url';
          //   identity = 1;
          // }
        ];
      }
    ];
  }

}
