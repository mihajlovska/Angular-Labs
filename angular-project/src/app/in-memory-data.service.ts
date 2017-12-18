import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable()
export class InMemoryDataService {
  createDb() {
  const students = [{
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
    return {students};

  }

  constructor() { }

}
