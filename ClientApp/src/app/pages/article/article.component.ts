import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  operation: string;

  @Input()
  articleID: string;

  constructor(private routerInfo: ActivatedRoute, private userService: UserService,
              private router: Router) {
    this.routerInfo.queryParams.subscribe(
      result => {
        this.operation = result['operation'];
        this.articleID = result['articleID'];
      }
    );
    if (this.operation !== 'new' && this.operation !== 'view' && this.operation !== 'edit') {
      this.router.navigate(['/404']).then();
    }
  }

  ngOnInit() {
  }

}