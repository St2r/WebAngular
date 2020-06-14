import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-res',
  templateUrl: './user-res.component.html',
  styleUrls: ['./user-res.component.css']
})
export class UserResComponent implements OnInit {
  @Input() search_content:string;

  user_list:UserInfo[];

  got_res:boolean;

  constructor(private router:Router, private fetchService:FetchDataService, private userService:UserService) { }

  ngOnInit() {
    this.loadUserInfo();
    if (this.user_list.length>0) {
      this.got_res = true;
    }
    else {
      this.got_res = false;
    }
  }

  loadUserInfo() {
    this.fetchService.getUserByKeyword(this.search_content).subscribe(
      res => this.user_list=res
    );
  }

  toSpace() {
    console.log(this.userService.logged);
    console.log(this.userService.username);
    console.log(this.userService.userInfo);
    this.router.navigate(['/my-space/' + this.userService.username]).then();
  }

}
