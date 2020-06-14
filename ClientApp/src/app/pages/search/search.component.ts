import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search_content:string = '';
  
  hot_search:string[] = [
    '期末考试取消',
    '软工作业延期'
  ];

  history_search: string[] = [];

  search_type:any = 1;

  constructor(private storageService:StorageService, private router:Router) { }

  ngOnInit() {
    this.loadHotSearch();
    var search_list = this.storageService.get('history');
    if (search_list) {
      this.history_search = search_list;
    }
  }

// TODO 获取数据
  loadHotSearch() {

  }

  storeHistorySearch() {
    this.storageService.set('history', this.history_search);
  }

  search() {
    if (this.search_content=='') {
      this.router.navigate(['/search']);
    }
    else {
      this.history_search.push(this.search_content);
      this.storeHistorySearch();
      this.router.navigate(['/result'], {
        queryParams: {content:this.search_content, type:1}
      }).then();
    }
  }

  clear() {
    this.history_search = [];
    this.storageService.remove('history');
  }

}
