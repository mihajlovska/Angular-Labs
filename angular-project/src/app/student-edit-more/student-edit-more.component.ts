import { Component, OnInit, Input, OnChanges  } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../model/student';
import { StudentManagementService } from '../student-management.service';
import { Router } from '@angular/router';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-student-edit-more',
  templateUrl: './student-edit-more.component.html',
  styleUrls: ['./student-edit-more.component.css']
})
export class StudentEditMoreComponent implements OnInit {
  studentForm: FormGroup;
  public CREATE_ACTION = 'Create';
  public EDIT_ACTION = 'Edit';
  private _editingStudent: Student;
  public action = this.CREATE_ACTION;
  public  studentNew: Student;
  public studentIndeks;
  constructor(private fb: FormBuilder, private studentService: StudentManagementService, private router: Router,private route: ActivatedRoute) {
    this.createForm();
    this.router = router;
    this.studentService = studentService;
  }
  createForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      index: ['', Validators.required],
      modul1: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params => {
      this.studentIndeks = params.indeks;
    }));
    this.studentForm = new FormGroup({
      'name': new FormControl(this.studentNew.ime, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      'surname': new FormControl(this.studentNew.prezime, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      'index': new FormControl(this.studentNew.indeks, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]),
    });
  }
  change() {
    this.studentNew = new Student();
    this.studentNew.indeks = this.studentIndeks;
    this.studentNew.ime = this.studentForm.get('name').value;
    this.studentNew.prezime = this.studentForm.get('surname').value;
    this.studentNew.nasoka = this.studentForm.get('modul1').value;
    this.studentService.change(this.studentNew)
      .then(editedStudent => {
        this.router.navigate(['list']);
      });
  }

}
