import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../model/student';
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
  @Input('editingStudent')
  set setEditingStudent(editingStudent: Student){
    this.student = new Student();
    if (editingStudent) {
      this.action = this.EDIT_ACTION;
      this._editingStudent = editingStudent;
      this.student.ime = editingStudent.ime;
      this.student.prezime = editingStudent.prezime;
      this.student.indeks = editingStudent.indeks;
      this.student.nasoka = editingStudent.nasoka;
    }
  }
  student = new Student();
  constructor(private studentService: StudentManagementService) { }

  ngOnInit() {
  }
  public save(): void {
    this.studentService.save(this.student);
    this.student = new Student();
  }
  public edit() {
    this.studentService.edit(this._editingStudent, this.student);
  }


}
