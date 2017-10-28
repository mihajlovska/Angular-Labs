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
  constructor() { }

}
