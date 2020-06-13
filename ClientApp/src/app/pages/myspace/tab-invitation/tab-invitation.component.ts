import {Component, OnInit, Input} from '@angular/core';
import {ArticleInfo} from '../../../model/article-info';
import {FetchDataService} from '../../../services/fetch-data.service';

@Component({
  selector: 'app-tab-invitation',
  templateUrl: './tab-invitation.component.html',
  styleUrls: ['./tab-invitation.component.css']
})
export class TabInvitationComponent implements OnInit {
  @Input()
  targetName: string;

  myArticle: ArticleInfo[];

  loading: boolean;

  constructor(private fetchService: FetchDataService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadMyInvitation().then(
      () => this.loading = false
    );
  }

  async loadMyInvitation() {
    this.myArticle = await this.fetchService.getInvitationByUser(this.targetName);
  }

}
