import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test-image',
  templateUrl: './test-image.component.html',
  styleUrls: ['./test-image.component.css']
})
export class TestImageComponent implements OnInit {
  baseUrl: string;

  public imagePath;
  imgURL: any;
  public message: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
  }

  fileChange(files) {
    console.log(files);
    if (files.length === 0) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;

      console.log(this.imgURL);
    };
  }

  upload() {
    if (this.imagePath == null) {
      return;
    }
    console.log('upload');
    const form = new FormData();
    form.append('image', this.imagePath[0]);
    form.append('t_string','hello world');

    this.http.post<string>(this.baseUrl + 'controller/image', form).subscribe(
      result => {
        console.log(result[0]);
      }
    );
  }
}
