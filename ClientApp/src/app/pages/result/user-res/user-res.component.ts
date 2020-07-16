import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {FetchDataService} from 'src/app/services/fetch-data.service';
import {UserService} from 'src/app/services/user/user.service';
import {IdentityService} from '../../../services/identity/identity.service';
import {UserBaseInfo} from '../../../model/user-base-info';

@Component({
  selector: 'app-user-res',
  templateUrl: './user-res.component.html',
  styleUrls: ['./user-res.component.css']
})
export class UserResComponent implements OnInit {
  @Input()
  user_list: UserBaseInfo[];

  got_res: boolean;

  constructor(private router: Router, private fetchService: FetchDataService,
              private userService: UserService, private identityService: IdentityService) {
  }

  ngOnInit() {
    if (this.user_list != null && this.user_list.length > 0) {
      this.got_res = true;
    } else {
      this.got_res = false;
    }
  }

  toSpace() {
    this.router.navigate(['/my-space/' + this.identityService.username]).then();
  }

}
