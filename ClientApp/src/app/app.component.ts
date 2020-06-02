import {Component, Input} from '@angular/core';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchContent = '';

  constructor(private loginService: LoginService) {
  }

  buttonPost() {
    this.loginService.login('1', '2');
    console.log(1);
  }

  userIcon(): string {
    return this.loginService.getUserImage();
  }

  toSpace() {

  }
}
