import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  operation: string;

  @Input()
  articleId: number;

  @Input()
  block: string;

  constructor(private routerInfo: ActivatedRoute, private userService: UserService,
              private router: Router) {
    this.routerInfo.queryParams.subscribe(
      result => {
        this.operation = result['operation'];
        this.articleId = result['articleId'];
        this.block = result['block'];
      }
    );
    if (this.operation !== 'new' && this.operation !== 'view' && this.operation !== 'edit') {
      this.router.navigate(['/404']).then();
    }
  }

  ngOnInit() {
  }

}
