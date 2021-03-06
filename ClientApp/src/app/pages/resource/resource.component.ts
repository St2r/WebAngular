import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {UserService} from '../../services/user/user.service';
import {FetchDataService} from '../../services/fetch-data.service';
import {BlockInfo} from '../../model/block-info';
import {ArticleInfo} from '../../model/article-info';
import {OperationService} from '../../services/operation.service';
import {HotTopic} from '../../model/hot-topic';
import {IdentityService} from '../../services/identity/identity.service';
import {BlockService} from '../../services/block/block.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  // 板块的名称
  // @Input()
  block: string;

  pageSize = 8;
  page = 1;

  // 板块信息
  blockInfo!: BlockInfo;

  // 帖子
  articles!: ArticleInfo;

  // 热点数据
  hotTopics!: HotTopic[];

  // 排序方式
  sort: string;

  // 过滤方式
  filter: string;

  constructor(private router: Router, private userService: UserService,
              private fetchDataService: FetchDataService, private blockService: BlockService,
              private routerInfo: ActivatedRoute, private modal: NzModalService,
              private operationService: OperationService, private identityService: IdentityService) {
    this.routerInfo.params.subscribe((params: Params) => {
      this.block = params['block'];
      this.init();
    });
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.sort = 'latest';
    this.filter = 'all';

    this.loadBlockInfo().then();
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

  // 请求后端-将今日的热点信息加载到hotTopics中
  loadHotTopic() {
    this.fetchDataService.getHotTopic(this.block).subscribe(
      result => this.hotTopics = result
    );
  }

  // 更新排序方式或者过滤器时，重新加载数据
  reloadData() {
    this.page = 1;
    this.loadData(1);
  }

  // 请求后端-返回板块的当前信息
  async loadBlockInfo() {
    this.blockInfo = await this.blockService.getBlockInfo(this.block);
  }

  // 关注
  follow() {
    this.blockInfo.isFollowed = true;
    this.operationService.requestFollowBlock(this.identityService.username, this.block).subscribe();
  }

  // 取消关注
  disFollow() {
    this.modal.info({
      nzTitle: '你确定要取消关注么',
      nzOnOk: () => {
        this.blockInfo.isFollowed = false;
        this.operationService.requestDisFollowBlock(this.identityService.username, this.block).subscribe();
      },
      nzOnCancel: null
    });
  }

  newArticle() {
    this.router.navigate(['/article'], {queryParams: {operation: 'new', block: this.blockInfo.blockName}}).then();
  }

  viewArticle(articleId: string) {
    this.router.navigate(['/article'], {
      queryParams: {operation: 'view', block: this.blockInfo.blockName, articleId: articleId}
    }).then();
  }
}
