import { Component, OnInit } from '@angular/core';
import {Article} from '../../../model/article';

@Component({
  selector: 'app-tab-invitation',
  templateUrl: './tab-invitation.component.html',
  styleUrls: ['./tab-invitation.component.css']
})
export class TabInvitationComponent implements OnInit {

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