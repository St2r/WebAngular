import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {BlockInfo} from '../../model/block-info';
import {ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {
  @Input()
  targetName: string;

  userInfo: UserInfo;

  recentVisitor: UserInfo[];

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
    if (this.userInfo.brief === '') {
      this.userInfo.brief = 'ta 比较懒还没有说明';
    }
  }

  addNewVisit() {
    this.userService.requestVisitRecord(this.targetName, this.userInfo.username).subscribe();
  }

  async loadUserInfo() {
    this.userInfo = await this.userService.getUserInfo(this.targetName);
  }

  async loadVisitorInfo() {
    this.recentVisitor = await this.userService.getRecentVisitor(this.targetName);
  }

  async loadFavorBlockInfo() {
    this.favorBlock = await this.userService.getFavBlock(this.targetName);
  }

  setViewMode() {
    this.ownPage = this.targetName.localeCompare(this.userInfo.username) === 0;
  }
}
