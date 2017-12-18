import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../model/student';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { StudentManagementService } from '../student-management.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public student: Student;
  constructor(private studentService: StudentManagementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params => {
        const studentIndeks = params.indeks;
        console.log('params:', params);
        console.log('indeks:', studentIndeks);
        const studentPromise = this.studentService
          .getStudentByIndex(studentIndeks);
        studentPromise.subscribe(student => {
          this.student = student;
        });
        return studentPromise;
      }));
  }

}
