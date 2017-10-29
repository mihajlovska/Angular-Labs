import { Component, OnInit, NgModule } from '@angular/core';
import { StudentManagementService } from './student-management.service';
import {Student} from './model/student';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Students information';
  public students: Student[];

  constructor(private studentService: StudentManagementService) {}
  ngOnInit(): void {
    this.studentService.student()
      .then(students => this.students = students)
      .catch(error => console.error(error.errorMessage));
  }
}
