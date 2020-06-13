import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search_content:string;
  
  hot_search:string[] = [
    '期末考试取消',
    '软工作业延期'
  ];

  history_search: string[] = [];

  constructor(private storageService:StorageService) { }

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
    alert(this.search_content);
    this.history_search.push(this.search_content);
    this.storeHistorySearch();
  }

  clear() {
    this.history_search = [];
  }

}
