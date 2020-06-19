import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user/user.service';
import {MetaDataService} from '../../../services/meta-data.service';
import {ArticleService} from '../../../services/article/article.service';
import {IdentityService} from '../../../services/identity/identity.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {
  @Input()
  block: string;

  // 暂存的封面图
  curCover;

  userLevel: number;

  validateForm: FormGroup;

  editParam = {
    selector: 'textarea',
    // plugins是tinymce的各种插件
    plugins: 'link lists code table wordcount codesample',
    // toolbar定义快捷栏的操作, | 用来分隔显示
    toolbar: 'codesample | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft'
      + ' aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo '
      + '| link unlink image code | removeformat | h2 h3 h4',
    height: 500,
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

  content = 'Write what you want to write here.';

  constructor(private fb: FormBuilder, private routerInfo: ActivatedRoute,
              private userService: UserService, private router: Router,
              public metaDataService: MetaDataService, private articleService: ArticleService, private identityService: IdentityService) {
    if (!this.identityService.logged) {
      this.router.navigate(['/404']).then();
    }
    this.getUserInfo();
    this.validateForm = this.fb.group({
      author: [this.identityService.username],
      title: ['', [Validators.required]],
      tags: [['资源分享']],
      limit: ['0'],
      content: ['Write something here'],
      cover: [null]
    });
  }

  ngOnInit() {
  }

  // 请求用户等级
  getUserInfo() {
    this.userService.requestUserInfo(this.identityService.username).subscribe(
      result => {
        this.userLevel = result[0].level;
      }
    );
  }

  submitForm(value) {
    console.log(value);
    this.articleService.newArticle(this.validateForm.value).then();
  }

  coverChange(e) {
    if (e.target.files.length < 1) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.curCover = reader.result;
    };
    this.validateForm.value['cover'] = e.target.files[0];
  }

  attachmentChange(e) {
    if (e.target.files.length < 1) {
      return;
    }
    this.validateForm.value['attachment'] = e.target.files[0];
  }
}
