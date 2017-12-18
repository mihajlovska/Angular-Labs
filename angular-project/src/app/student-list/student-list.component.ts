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
  constructor(private studentService: StudentManagementService) {
    this.getStudents = this.getStudents.bind(this);
  }
  ngOnInit() {
    this.getStudents();
  }
  getStudents(): void {
    this.studentService.getStudent()
      .subscribe(students => this.students = students);
  }
  delete(Student: Student): void {
    this.students = this.students.filter(h => h !== Student);
    this.studentService.deleteStudent(Student).subscribe();
  }

}
