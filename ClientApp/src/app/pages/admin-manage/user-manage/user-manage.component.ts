import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {UserService} from 'src/app/services/user/user.service';
import {Router} from '@angular/router';
import {IdentityService} from '../../../services/identity/identity.service';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {FetchDataService} from 'src/app/services/fetch-data.service';
import {UserBaseInfo} from '../../../model/user-base-info';
import {AdminUserService} from '../../../services/admin/admin-user/admin-user.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  user_list: UserBaseInfo[];

  searchContent = '';

  constructor(private adminService: AdminService, private userService: UserService, private router: Router,
              private identityService: IdentityService, private adminUserService: AdminUserService) {
  }

  ngOnInit() {
    this.loadUserInfo().then();
  }

  // 获取数据
  async loadUserInfo() {
    this.user_list = await this.adminService.getAllUser();
  }

  toSpace(username: string) {
    this.router.navigate(['/my-space/' + username]).then();
  }

  // TODO 编辑用户信息 使用router?
  editTargetInfo() {

  }

  async banTargetUser(username: string) {
    let res: boolean;
    res = await this.adminUserService.banUser(username, 1);
    if (res) {
      alert('成功禁言用户');
    } else {
      alert('用户已被禁言');
    }
  }

  cancel() {
    return;
  }

  search() {
    if (this.searchContent !== '') {
      // this.fetchService.getUserByKeyword(this.searchContent).subscribe(
      //   res => this.user_list = res
      // );
    } else {
      this.loadUserInfo();
    }
  }

}

