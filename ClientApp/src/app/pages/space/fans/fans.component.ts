import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.css']
})
export class FansComponent implements OnInit {
  @Input()
  userId: string;

  Content = 'Content Test';

  constructor() {
  }

  ngOnInit() {
  }

}
