import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../model/student';
import { Router } from '@angular/router';
import { StudentManagementService } from '../student-management.service';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  public CREATE_ACTION = 'Create';
  public EDIT_ACTION = 'Edit';
  private _editingStudent: Student;
  public action = this.CREATE_ACTION;
  public  student: Student;
  students: Student[];

  @Input('editingStudent')
  set setEditingStudent(editingStudent: Student){
    this.setStudent(editingStudent);
  }
  private setStudent(editingStudent: Student) {
    if (editingStudent) {
      this.action = this.EDIT_ACTION;
      this._editingStudent = editingStudent;
      this.student.ime = editingStudent.ime;
      this.student.prezime = editingStudent.prezime;
      this.student.indeks = editingStudent.indeks;
      this.student.nasoka = editingStudent.nasoka;
    }
    this.router.navigate(['list']);
  }
  constructor(private router: Router, private studentService: StudentManagementService) {
    this.student = new Student();
    this.router = router;
  }

  ngOnInit() {
    this.getStudent();
  }
  getStudent(): void {
    this.studentService.getStudent()
      .subscribe(students => this.students = students);
  }

  save(ime: String): void {
   ime = ime.trim();
   if ( !ime ) { return; }
   this.studentService.save({ime} as Student)
     .subscribe(student => {
       this.students.push(student);
     });
  }
  public edit() {
    this.studentService.update(this._editingStudent)
      .subscribe(studentFormServer => this.setStudent(studentFormServer));
  }


}
