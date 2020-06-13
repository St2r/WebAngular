import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public searchContent = '';
  optionGroups: any[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.optionGroups = [
        {
          title: '热门搜索',
          children: [
            {
              title: '软工作业',
              count: 39
            },
            {
              title: '前端杀人',
              count: 56
            }
          ]
        },
        {
          title: '新鲜事',
          children: [
            {
              title: '期末考试宣布取消',
              count: 114514
            },
            {
              title: '考试周延期',
              count: 30010
            }
          ]
        },
      ];
    }, 1000);
  }

}
