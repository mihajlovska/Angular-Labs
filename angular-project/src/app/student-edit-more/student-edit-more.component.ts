import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-edit-more',
  templateUrl: './student-edit-more.component.html',
  styleUrls: ['./student-edit-more.component.css']
})
export class StudentEditMoreComponent implements OnInit {
  student: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.student = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
