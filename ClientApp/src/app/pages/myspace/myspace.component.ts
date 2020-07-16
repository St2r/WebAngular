import {Component, Input, OnInit} from '@angular/core';
import {BlockInfo} from '../../model/block-info';
import {ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user/user.service';
import {UserBaseInfo} from '../../model/user-base-info';
import {UserDetailInfo} from '../../model/user-detail-info';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {
  @Input()
  targetName: string;

  userBaseInfo: UserBaseInfo;
  userDetailInfo: UserDetailInfo;

  recentVisitor: UserBaseInfo[];

  favorBlock: BlockInfo[];

  ownPage: boolean;

  loading: boolean;

  constructor(private routerInfo: ActivatedRoute, private userService: UserService) {
    this.loading = true;
  }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      this.targetName = params['target'];
      this.init();
    });
  }

  init() {
    this.loadUserInfo().then(
      () => this.loadVisitorInfo().then(
        () => this.loadFavorBlockInfo().then(
          () => {
            this.modifyBrief();
            this.setViewMode();
            if (!this.ownPage) {
              this.addNewVisit();
            }
            this.loading = false;
          }
        )
      )
    );
  }

  modifyBrief() {
    if (this.userBaseInfo.brief === '') {
      this.userBaseInfo.brief = 'ta 比较懒还没有说明';
    }
  }

  addNewVisit() {
    this.userService.requestVisitRecord(this.targetName, this.userBaseInfo.username).subscribe();
  }

  async loadUserInfo() {
    this.userBaseInfo = await this.userService.getBaseInfo(this.targetName);
    this.userDetailInfo = await this.userService.getDetailInfo(this.targetName);
  }

  async loadVisitorInfo() {
    this.recentVisitor = await this.userService.getRecentVisitor(this.targetName);
    console.log(this.recentVisitor);
  }

  async loadFavorBlockInfo() {
    this.favorBlock = await this.userService.getFavBlock(this.targetName);
  }

  setViewMode() {
    this.ownPage = this.targetName.localeCompare(this.userBaseInfo.username) === 0;
  }
}
