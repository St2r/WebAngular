import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  editParam = {
    selector: 'textarea',
    // plugins是tinymce的各种插件
    plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu codesample',
    // 语言包可以使用tinymce提供的网址,但是墙的原因,会连不上,所以还是自行下载,放到assets里面
    language_url: '../../../assets/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    // toolbar定义快捷栏的操作, | 用来分隔显示
    toolbar: 'codesample | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft'
        + ' aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo '
        + '| link unlink image code | removeformat | h2 h3 h4',
    height: 400,
    // 这里是代码块的一些语言选择,好像暂时还没支持typescript,所以博文都是js格式
    codesample_languages: [
      { text: 'HTML/XML', value: 'markup' },
      { text: 'JavaScript', value: 'javascript' },
      { text: 'CSS', value: 'css' },
      { text: 'Java', value: 'java' }
    ]
  };

  content = '???';

}
