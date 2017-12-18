import { Component, OnInit } from '@angular/core';
import { StudyProgramService } from '../study-program.service';
import { StudyProgram } from '../model/studyProgram';

@Component({
  selector: 'app-study-program',
  templateUrl: './study-program.component.html',
  styleUrls: ['./study-program.component.css']
})
export class StudyProgramComponent implements OnInit {

  public studyPrograms: StudyProgram[];
  constructor(private studyProgramService: StudyProgramService) { }

  ngOnInit() {
    this.studyProgramService.studyProgram()
      .then(studyPrograms => this.studyPrograms = studyPrograms )
      .catch(error => console.error(error.errorMessage));
  }

}
