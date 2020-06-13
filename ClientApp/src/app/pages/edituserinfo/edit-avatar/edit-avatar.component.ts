import {Component, Inject, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UploadFile} from 'ng-zorro-antd';

@Component({
  selector: 'app-edit-avatar',
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.css']
})
export class EditAvatarComponent implements OnInit {
  @Input()
  username: string;

  baseUrl: string;
  avatarUrl?: string;
  loading = false;

  constructor(@Inject('BASE_URL') baseUrl: string, private userService: UserService) {
    this.baseUrl = baseUrl;
    this.userService.requestUserInfo(this.username).subscribe(
      result => this.username = result.avatarUrl
    );
  }

  ngOnInit() {
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
