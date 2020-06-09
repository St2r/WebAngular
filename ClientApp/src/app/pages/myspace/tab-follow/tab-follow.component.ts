import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-follow',
  templateUrl: './tab-follow.component.html',
  styleUrls: ['./tab-follow.component.css']
})
export class TabFollowComponent implements OnInit {
  @Input()
  targetUser: string;

  loginUser: string;

  constructor() { }

  ngOnInit() {
    this.loginUser = 'tab-user';
  }

}
