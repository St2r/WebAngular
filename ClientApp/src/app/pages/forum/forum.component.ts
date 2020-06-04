import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  ImageUrl: string;
  data: ItemData[] = [];
  subData: ItemData[];
  pageSize = 8;
  firstIndex = 1;

  constructor(private router: Router, private loginService: LoginService) {
    this.ImageUrl = loginService.getUserImage();
  }

  ngOnInit() {
    this.loadData(1);
    this.getData(1);
  }

  loadData(pi: number): void {
    this.data = new Array(55).fill({}).map((_, index) => {
      return {
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources ' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }

  getData(s) {
    this.subData = this.data.slice((s - 1) * this.pageSize, Math.min(s * this.pageSize, this.data.length));
  }
}


interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
