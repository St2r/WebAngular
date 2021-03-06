import {Component, Inject, Input, OnInit} from '@angular/core';
import {UploadFile} from 'ng-zorro-antd';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-avatar-editor',
  templateUrl: './avatar-editor.component.html',
  styleUrls: ['./avatar-editor.component.css']
})
export class AvatarEditorComponent implements OnInit {
  @Input()
  username: string;

  baseUrl: string;
  avatarUrl?: string;
  loading = false;


  constructor(@Inject('BASE_URL') baseUrl: string, private userService: UserService) {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
    this.init().then();
  }

  async init() {
    const i = await this.userService.getBaseInfo(this.username);
    this.avatarUrl = i.avatarUrl;
  }

  appendData = () => {
    return {
      username: this.username
    };
  }

  // 回调当前选择的图片
  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    // tslint:disable-next-line:no-non-null-assertion
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        // tslint:disable-next-line:no-non-null-assertion
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        console.log('Network error');
        this.loading = false;
        break;
    }
  }
}
