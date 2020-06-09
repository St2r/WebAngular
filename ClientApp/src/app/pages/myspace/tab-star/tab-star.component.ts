import { Component, OnInit } from '@angular/core';
import {Article} from '../../../model/article';

@Component({
  selector: 'app-tab-star',
  templateUrl: './tab-star.component.html',
  styleUrls: ['./tab-star.component.css']
})
export class TabStarComponent implements OnInit {

  my_invitation:Article[];

  constructor() { }

  ngOnInit() {
    this.loadMyInvitation();
  }

  loadMyInvitation() {
    this.my_invitation = [
      new class implements Article {
        Title = 'title 1';
        Tag = ['tmp'];
        Author = 'author_tmp';
        Content = 'tmp content';
      },
      new class implements Article {
        Title = 'title 2';
        Tag = ['tmp'];
        Author = 'author_tmp';
        Content = 'tmp content';
      },
      new class implements Article {
        Title = 'title 3';
        Tag = ['tmp'];
        Author = 'author_tmp';
        Content = 'tmp content';
      },
    ]
  }

}
