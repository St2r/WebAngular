import {Component, Input, OnInit} from '@angular/core';
import {UserBaseInfo} from '../../../model/user-base-info';
import {UserDetailInfo} from '../../../model/user-detail-info';

@Component({
  selector: 'app-side-user',
  templateUrl: './side-user.component.html',
  styleUrls: ['./side-user.component.css']
})
export class SideUserComponent implements OnInit {
  @Input()
  userBaseInfo: UserBaseInfo;

  @Input()
  userDetailInfo: UserDetailInfo;

  @Input()
  ownPage: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
