import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';
import {AdminService} from '../../../services/admin.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import {IdentityService} from '../../../services/identity/identity.service';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  user_list: UserInfo[];

  searchContent: string = "";

  constructor(private adminService: AdminService, private userService: UserService, private router: Router, 
    private identityService: IdentityService, private fetchService:FetchDataService) { }

  ngOnInit() {
    this.loadUserInfo().then();
  }

  // 获取数据
  async loadUserInfo() {
    this.user_list = await this.adminService.getAllUser();
  }

  toSpace(username:string) {
    this.router.navigate(['/my-space/' + username]).then();
  }

  // TODO 编辑用户信息 使用router?
  editTargetInfo() {
    
  }

  banTargetUser(username:string) {
    let res:boolean;
    res = this.userService.banUser(username);
    if (res) {
      alert("成功禁言用户");
    }
    else {
      alert("用户已被禁言");
    }
  }

  cancel() {
    ;
  }

  search() {
    if (this.searchContent!="") {
      this.fetchService.getUserByKeyword(this.searchContent).subscribe(
        res => this.user_list=res
      );
    }
    else {
      this.loadUserInfo();
    }
  }

}

// TODO 解禁的实现