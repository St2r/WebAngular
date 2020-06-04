import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Question} from '../../model/question';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  question = new class implements Question {
    Analysis = '题目解析';
    Answer = ['A', 'B'];
    QuestionContent = '题目';
    Title = '标题';
    Type = 1;
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
