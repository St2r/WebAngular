import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  // 用于将tinymce生成的html可信化
  constructor(private sanitized: DomSanitizer) {
  }
  transform(value: any, ...args: any[]): any {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
