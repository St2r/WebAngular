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

  // TODO 设为置顶
  setAsTop() {
    alert("设为置顶");
  }

  // TODO 设为精华
  setAsValued() {
    alert("设为精华");
  }

  // TODO 删除
  delete() {
    alert("删除");
  }

  cancel() {
    ;
  }
}
