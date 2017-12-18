import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Student} from './model/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {MessageServiceService} from './message-service.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentManagementService {
  private studentsUrl = 'http://localhost:8080';
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
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  public student(): Promise<Student[]> {
    return Promise.resolve(this.students);
  }

  /* GET Students*/
  public getStudent(): Observable<Student[]> {
    return this.http.get(this.studentsUrl + '/students')
      .pipe(
        tap(students => this.log('fetched students')),
        catchError(this.handleError('getStudents', []))
      );
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

  save(student: Student): Promise<Student> {
    this.students.push(student);
    return Promise.resolve(student);
  }
  /*PUT Update Student */
  updateStudent(Student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, Student, httpOptions).pipe(
      tap(_ => this.log('updated student index=${Student.index}')),
      catchError(this.handleError<any>('updateStudent'))
    );
  }
  /*POST Add Student*/
  addStudent(Student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, Student, httpOptions).pipe(
      tap((student: Student) => this.log('added student with index=${student.index}')),
      catchError(this.handleError<Student>('addStudent'))
    );
  }
  /* GET Student by Index*/
  getStudentByIndex(studentIndeks: string): Observable<Student> {
    const url = '${this.studentsUrl}/?index=${index}';
    return this.http.get<Student[]>(url)
      .pipe(
        map(students => students[3]),
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log('${outcome} student index=${index}');
        }),
        catchError(this.handleError<Student>('getStudent index=${index}'))
      );
  }
  /* DELETE Student*/
  deleteStudent(Student: Student | number): Observable<Student> {
    const index = typeof Student === 'number' ? Student : Student.indeks;
    const url = '${this.studentsUrl}/${index}';
    return this.http.delete<Student>( url, httpOptions ).pipe(
      tap(_ => this.log('deleted student indeks=${index}')),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }
  change(student: Student): Promise<Student> {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].indeks === student.indeks) {
        this.students[i].ime = student.ime;
        this.students[i].prezime = student.prezime;
        this.students[i].nasoka = student.nasoka;
        return Promise.resolve(this.students[i]);
      }
    }
    return Promise.reject('error');
  }
  constructor(private http: HttpClient, private messageService: MessageServiceService) {
  }


}
