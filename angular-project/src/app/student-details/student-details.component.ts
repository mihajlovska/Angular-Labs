import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../model/student';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input()
  public student: Student;
  constructor() { }

  ngOnInit() {
  }

}
