import { Injectable } from '@angular/core';
import {Student} from './model/student';

@Injectable()
export class StudentManagementService {

  private students = [{
    ime: 'Stefanija',
    prezime: 'Mihajlovska',
    nasoka: 'KNI',
    indeks: '151082'
  }, {
    ime: 'Sanja',
    prezime: 'Mateeva',
    nasoka: 'KNI',
    indeks: '151056'
  }, {
    ime: 'Eva',
    prezime: 'Krajcevska',
    nasoka: 'KNI',
    indeks: '151190'
  }, {
    ime: 'Ina',
    prezime: 'Lazarevska',
    nasoka: 'KNI',
    indeks: '151112'
  }];

  public student(): Promise<Student[]> {
    return Promise.resolve(this.students);
  }
  save(student: Student): Promise<Student> {
    const studentsFromServer = [];
    Object.assign(studentsFromServer, this.student);
    this.students = studentsFromServer;
    this.students.push(student);
    return Promise.resolve(student);
  }
  edit(originalStudent: Student, updatedStudent: Student): Promise<Student> {
    const studentsFromServer = [];
    Object.assign(studentsFromServer, this.students);
    this.students = studentsFromServer;
    return Promise.resolve(updatedStudent);
  }
  constructor() { }

}
