import {Component, OnInit} from '@angular/core';
import {ArticleInfo} from 'src/app/model/article-info';
import {FetchDataService} from 'src/app/services/fetch-data.service';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-article-manage',
  templateUrl: './article-manage.component.html',
  styleUrls: ['./article-manage.component.css']
})
export class ArticleManageComponent implements OnInit {
  article_list: ArticleInfo[];

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.loadArticleInfo().then();
  }

  // 请求数据
  async loadArticleInfo() {
    this.article_list = await this.adminService.getAllArticle();
  }
}
