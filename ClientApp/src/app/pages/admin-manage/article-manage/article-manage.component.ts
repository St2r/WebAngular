import {Component, OnInit} from '@angular/core';
import {ArticleInfo} from 'src/app/model/article-info';
import {FetchDataService} from 'src/app/services/fetch-data.service';
import {AdminService} from '../../../services/admin.service';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-article-manage',
  templateUrl: './article-manage.component.html',
  styleUrls: ['./article-manage.component.css']
})
export class ArticleManageComponent implements OnInit {
  article_list: ArticleInfo[];

  searchContent: string = "";

  constructor(private adminService: AdminService, private articleService:ArticleService, private fetchService:FetchDataService) {
  }

  ngOnInit() {
    this.loadArticleInfo().then();
  }

  // 请求数据
  async loadArticleInfo() {
    this.article_list = await this.adminService.getAllArticle();
  }

  setAsTop(articleid:number) {
    let res:boolean;
    res = this.articleService.setTop(articleid);
    if (res) {
      alert("成功设置置顶");
    }
    else {
      alert("已经是置顶状态");
    }
  }

  setAsValued(articleid: number) {
    let res:boolean;
    res = this.articleService.setValued(articleid);
    if (res) {
      alert("成功设为精华");
    }
    else {
      alert("已经是精华帖子");
    }
  }

  delete(articleid: number) {
    let res:boolean;
    res = this.articleService.deleteTarget(articleid);
    if (res) {
      alert("成功删除");
    }
    else {
      alert("帖子不存在");
    }
  }

  cancel() {
    ;
  }

  search() {
    if (this.searchContent!="") {
      this.fetchService.getArticleByKeyword(this.searchContent).subscribe(
        res => this.article_list=res
      );
    }
    else {
      this.loadArticleInfo();
    }
  }
}
