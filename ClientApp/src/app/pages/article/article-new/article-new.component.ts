import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {MetaDataService} from '../../../services/meta-data.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {
  // 暂存的封面图
  curCover;

  userLevel: number;

  validateForm: FormGroup;

  editParam = {
    selector: 'textarea',
    // plugins是tinymce的各种插件
    plugins: 'link lists image code table wordcount codesample',
    // 语言包可以使用tinymce提供的网址,但是墙的原因,会连不上,所以还是自行下载,放到assets里面
    // language_url: '../../../assets/tinymce/langs/zh_CN.js',
    // language: 'zh_CN',
    // toolbar定义快捷栏的操作, | 用来分隔显示
    toolbar: 'codesample | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft'
      + ' aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo '
      + '| link unlink image code | removeformat | h2 h3 h4',
    height: 800,
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
              private metaDataService: MetaDataService) {
    if (!this.userService.status) {
      console.log('not log in');
      // this.router.navigate(['/404']).then();
    }
    this.getUserInfo();
    this.validateForm = this.fb.group({
      author: ['用userService搞用户名'],
      title: ['', [Validators.required]],
      tags: [['资源分享']],
      limit: ['0'],
      content: ['Write something here'],
      cover: ['']
    });
  }

  ngOnInit() {
  }

  // todo 请求用户等级
  getUserInfo() {
    this.userLevel = 3;
  }

  submitForm(value) {
    console.log(value);
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  fileChange(e) {
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
}
