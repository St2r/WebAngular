import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../model/comment';
import {formatDistance, addDays} from 'date-fns';
import {CommentService} from '../../services/comment/comment.service';
import {Router} from '@angular/router';
import {OperationService} from '../../services/operation.service';
import {UserService} from '../../services/user/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ArticleService} from '../../services/article/article.service';
import {IdentityService} from '../../services/identity/identity.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  articleID: string;

  validateForm!: FormGroup;

  editParam = {
    selector: 'textarea',
    // plugins是tinymce的各种插件
    plugins: 'link lists code table wordcount codesample',
    // toolbar定义快捷栏的操作, | 用来分隔显示
    toolbar: 'codesample | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft'
      + ' aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo '
      + '| link unlink image code | removeformat | h2 h3 h4',
    height: 300,
    // 这里是代码块的一些语言选择,好像暂时还没支持typescript,所以博文都是js格式
    codesample_languages: [
      {text: 'HTML/XML', value: 'markup'},
      {text: 'JavaScript', value: 'javascript'},
      {text: 'CSS', value: 'css'},
      {text: 'Java', value: 'java'},
      {text: 'Cpp', value: 'cpp'}
    ],
    outputFormat: 'html'
  };

  comments: Comment[];

  loading: boolean;

  sort: string;
  filter: string;

  constructor(private fb: FormBuilder, private commentService: CommentService, private router: Router,
              private operationService: OperationService, public userService: UserService,
              private articleService: ArticleService, public identityService: IdentityService) {
    this.loading = true;
    this.sort = 'latest';
    this.filter = 'all';

    this.validateForm = fb.group({
      username: [null],
      content: ['init content']
    });
  }

  ngOnInit() {
    this.loadComments().then(
      () => this.loading = false
    );
  }

  jumpToPersonPage(userId: string) {
    this.router.navigate(['/my-space' + userId]).then();
  }


  getDateDistance(curDate: string) {
    const d = new Date();
    const s = curDate.split('-');
    d.setFullYear(+s[0], +s[1] - 1, +s[2]);
    d.setHours(+s[3], +s[4]);
    return formatDistance(d, new Date());
  }

  async loadComments() {
    this.comments = await this.commentService.getComments(this.articleID, this.sort, this.filter);
  }

  Like(i: number) {
    if (this.comments[i].likeStatus === 0) {
      this.comments[i].likes += 1;
      this.comments[i].likeStatus = 1;
    } else if (this.comments[i].likeStatus === -1) {
      this.comments[i].likes += 1;
      this.comments[i].likeStatus = 1;
    } else {
      this.comments[i].likes -= 1;
      this.comments[i].likeStatus = 0;
    }
    // 数据传送回数据库
  }

  DisLike(i: number) {
    if (this.comments[i].likeStatus === 0) {
      this.comments[i].likeStatus = -1;
    } else if (this.comments[i].likeStatus === 1) {
      this.comments[i].likes -= 1;
      this.comments[i].likeStatus = -1;
    } else {
      this.comments[i].likeStatus = 0;
    }
    // 数据传送回数据库
  }

  submitForm(value) {
    value['username'] = this.identityService.username;
    console.log(value);
    // this.articleService.newComment(value);
  }
}
