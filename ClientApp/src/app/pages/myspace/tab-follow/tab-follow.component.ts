import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-follow',
  templateUrl: './tab-follow.component.html',
  styleUrls: ['./tab-follow.component.css']
})
export class TabFollowComponent implements OnInit {
  @Input() ownPage: boolean;
  @Input() targetName: string;

  constructor() {}

  ngOnInit() {
  }
}
