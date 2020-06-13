import {Component, Input, OnInit} from '@angular/core';
import { BlockInfo, AdminInfo} from '../../../../model/block-info';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-follow-block',
  templateUrl: './follow-block.component.html',
  styleUrls: ['./follow-block.component.css']
})
export class FollowBlockComponent implements OnInit {
  @Input()
  targetName: string;

  followBlock: BlockInfo[];

  loading: boolean;

  constructor(private userService: UserService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadBlockInfo().then(
      () => this.loading = false
    );
  }

  async loadBlockInfo() {
    this.followBlock = await this.userService.getFavBlock(this.targetName);
    console.log(this.followBlock);
  }

}
