import { Component, OnInit, Input } from '@angular/core';
import {ArticleInfo} from '../../../model/article-info';
import { FetchDataService } from '../../../services/fetch-data.service';

@Component({
  selector: 'app-tab-invitation',
  templateUrl: './tab-invitation.component.html',
  styleUrls: ['./tab-invitation.component.css']
})
export class TabInvitationComponent implements OnInit {
  @Input() targetName;

  my_invitation:ArticleInfo[];

  constructor(private fetchService:FetchDataService) { }

  ngOnInit() {
    this.loadMyInvitation();
  }

  loadMyInvitation() {
    // this.my_invitation = [
    //   new class implements Article {
    //     Title = 'title 1';
    //     Tag = ['tmp'];
    //     Author = 'author_tmp';
    //     Content = 'tmp content';
    //   },
    //   new class implements Article {
    //     Title = 'title 2';
    //     Tag = ['tmp'];
    //     Author = 'author_tmp';
    //     Content = 'tmp content';
    //   },
    //   new class implements Article {
    //     Title = 'title 3';
    //     Tag = ['tmp'];
    //     Author = 'author_tmp';
    //     Content = 'tmp content';
    //   },
    // ]
    this.fetchService.getInvitationByUser(this.targetName).subscribe(
      article => this.my_invitation=article
    );
  }

}