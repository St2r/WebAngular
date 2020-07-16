import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  content = '???';

  array: any = ['top image 1', 'top image 2', 'top image 3'];

  test() {
    alert("test");
  }

}
