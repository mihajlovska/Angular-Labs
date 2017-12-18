import { Injectable } from '@angular/core';
import {MessageServiceService} from './message-service.service';
import {HttpClient} from '@angular/common/http';
import { StudyProgram } from './model/studyProgram';


@Injectable()
export class StudyProgramService {

  public studyPrograms = [{
    id: '1',
    ime: 'KNI'
  }, {
      id: '2',
      ime: 'PET'
    }, {
      id: '3',
      ime: 'IKI'
    }
];
  constructor() { }

  public studyProgram(): Promise<StudyProgram[]> {
    return Promise.resolve(this.studyPrograms);
  }

}
