import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-follow',
  templateUrl: './tab-follow.component.html',
  styleUrls: ['./tab-follow.component.css']
})
export class TabFollowComponent implements OnInit {
  @Input() viewing_own_page:boolean;
  @Input() targetName: String;

  myfollow: String = '我关注的人';
  followme: String = '关注我的人';

  constructor() { }

  ngOnInit() {
    this.setFollowMe();
    this.setMyFollow();
  }

  setMyFollow() {
    if (this.viewing_own_page) {
      this.myfollow = '我关注的人';
    }
    else {
      this.myfollow = 'TA关注的人';
    }
  }

  setFollowMe() {
    if (this.viewing_own_page) {
      this.followme = '关注我的人';
    }
    else {
      this.followme = '关注TA的人';
    }
  }

}
