import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    this.students.push(student);
    return Promise.resolve(student);
  }
  edit(originalStudent: Student, updatedStudent: Student): Promise<Student> {
    const studentsFromServer = [];
    Object.assign(studentsFromServer, this.students);
    this.students = studentsFromServer;
    return Promise.resolve(updatedStudent);
  }
  findByIndeks(studentIndeks: string): Promise<Student> {
    const result = this.students.filter(student => student.indeks === studentIndeks);
    console.log('result:', result);
    if (result && result.length > 0) {
      return Promise.resolve(result[0]);
    } else {
      return Promise.reject({
        errorMessage: 'No Student with the given index found',
        errorCode: 404
      });

    }
  }
  constructor() { }

}
