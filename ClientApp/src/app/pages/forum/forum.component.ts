import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {UserService} from '../../services/user.service';

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
  curIndex = 1;
  articleNum: number;

  // 板块信息
  blockInfo: BlockInfo;

  // 帖子
  topicData: ItemData[];
  // 热点数据
  hotTopics: HotTopic[];

  // 排序方式
  sort: string;

  // 过滤方式
  filter: string;

  constructor(private router: Router, private userService: UserService,
              private routerInfo: ActivatedRoute, private modal: NzModalService) {
    this.ImageUrl = userService.avatarUrl;

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
    this.loadArticleNum(); // delete
    this.loadData(1);
    this.loadHotTopic();
  }

  // todo 请求后端-获取当前页的内容
  loadData(page: number): void {
    console.log([this.curIndex, this.sort, this.filter]);

    this.topicData = new Array(this.pageSize).fill({}).map((_, index) => {
      return {
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${page})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources ' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        isPinned: true
      };
    });
  }

  // todo 请求后端-返回板块的总内容条数
  loadArticleNum() {
    this.articleNum = 50;
  }

  // todo 请求后端-将今日的热点信息加载劲hotTopics中
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
    this.curIndex = 1;
    this.loadArticleNum();
    this.loadData(1);
  }

  // todo 请求后端-返回板块的当前信息
  loadBlockInfo() {
    this.blockInfo = new class implements BlockInfo {
      todayTotal = 100;
      accessRight = 2;
      contentTotal = 106782;
      followTotal = 12378;
      followed = true;
      masters = [new class implements Master {
        avatarUrl = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
        userId = 'testUser';
      }, new class implements Master {
        avatarUrl = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
        userId = 'testUser';
      }];
    };
  }

  // todo 后端
  follow() {
    this.blockInfo.followed = true;
  }

  // todo 后端
  disFollow() {
    this.modal.info({
      nzTitle: '你确定要取消关注么',
      nzOnOk: () => {
        console.log('Info OK');
        this.blockInfo.followed = false;
      },
      nzOnCancel: null
    });
  }
}


interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
  isPinned: boolean;
}

interface HotTopic {
  title: string;
  articleId: string;
}

interface Master {
  userId: string;
  avatarUrl: string;
}

interface BlockInfo {
  // 0 - 板块不存在
  // 1 - 板块无权限访问
  // 2 - 正常访问
  accessRight: number;
  followed: boolean;
  contentTotal: number;
  followTotal: number;
  todayTotal: number;
  masters: Master[];
}

