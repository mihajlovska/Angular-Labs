import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentManagementService } from '../student-management.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  title = 'Students information';
  public students: Student[];
  public currentStudent: Student;
  constructor(private studentService: StudentManagementService) {}
  ngOnInit(): void {
    this.studentService.student()
      .then(students => this.students = students)
      .catch(error => console.error(error.errorMessage));
  }

}
