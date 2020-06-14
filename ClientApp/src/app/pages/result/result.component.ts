import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  search_type: any;

  search_content:string;

  constructor(private routerinfo:ActivatedRoute, private router:Router) {
    this.routerinfo.queryParams.subscribe(
      result => {
        this.search_content = result['content'];
        this.search_type = result['type'];
      }
    );
  }

  ngOnInit() {
  }

  search() {
    
    
  }

}
