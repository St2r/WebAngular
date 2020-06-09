import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {UserService} from '../../services/user.service';
import {FetchDataService} from '../../services/fetch-data.service';
import {AdminInfo, BlockInfo} from '../../model/block-info';
import {ForumService} from '../../services/forum.service';
import {ArticleInfo} from '../../model/article-info';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  // 板块的名称
  @Input()
  block: string;

  ImageUrl: string;

  pageSize = 8;
  page = 1;

  // 板块信息
  blockInfo: BlockInfo;

  // 帖子
  articles: ArticleInfo;

  // 热点数据
  hotTopics: HotTopic[];

  // 排序方式
  sort: string;

  // 过滤方式
  filter: string;

  constructor(private router: Router, private userService: UserService,
              private fetchDataService: FetchDataService, private forumService: ForumService,
              private routerInfo: ActivatedRoute, private modal: NzModalService) {
    this.ImageUrl = userService.userInfo.avatarUrl;

    this.blockInfo = new class implements BlockInfo {
      admins: AdminInfo[];
      accessRight: number;
      contentTotal: number;
      followTotal: number;
      isFollowed: boolean;
      todayTotal: number;
    };

    this.routerInfo.params.subscribe((params: Params) => {
      this.block = params['block'];
      this.ngOnInit();
    });
  }

  ngOnInit() {
    console.log('init ' + this.block);
    this.sort = 'latest';
    this.filter = 'all';

    this.loadBlockInfo();
    this.loadData(1);
    this.loadHotTopic();
  }

  // 获取当前页的帖子
  loadData(page: number): void {
    this.page = page;
    this.fetchDataService.GetArticle(this.block, this.sort, this.filter, this.pageSize, this.page).subscribe(
      result => {
        this.articles = result[0];
      }
    );
  }

  // todo 请求后端-将今日的热点信息加载到hotTopics中
  loadHotTopic() {
    this.hotTopics = [
      new class implements HotTopic {
        articleId = 'article1';
        title = '震惊！某大学生竟';
      },
      new class implements HotTopic {
        articleId = 'article2';
        title = '谷歌校招';
      }
    ];
  }

  // 更新排序方式或者过滤器时，重新加载数据
  reloadData() {
    this.page = 1;
    this.loadData(1);
  }

  // todo 请求后端-返回板块的当前信息
  loadBlockInfo() {
    this.forumService.GetBlockInfo(this.block).subscribe(
      result => {
        this.blockInfo = result[0];
        console.log(result[0]);
      }
    );
  }

  // todo 后端
  follow() {
    this.blockInfo.isFollowed = true;
  }

  // todo 后端
  disFollow() {
    this.modal.info({
      nzTitle: '你确定要取消关注么',
      nzOnOk: () => {
        console.log('Info OK');
        this.blockInfo.isFollowed = false;
      },
      nzOnCancel: null
    });
  }
}

interface HotTopic {
  title: string;
  articleId: string;
}

