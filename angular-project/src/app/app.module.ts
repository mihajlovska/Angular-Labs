import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentManagementService } from './student-management.service';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditMoreComponent } from './student-edit-more/student-edit-more.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageServiceService } from './message-service.service';
import { StudyProgramComponent } from './study-program/study-program.component';
import { StudyProgramService } from './study-program.service';

const routes: Routes = [
    {path: 'list', component: StudentListComponent },
    {path: 'details/:indeks', component: StudentDetailsComponent},
    {path: 'new', component: StudentEditComponent },
    {path: 'edit/:indeks', component: StudentEditMoreComponent},
    {path: 'studyProgram', component: StudyProgramComponent }

  ];

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentEditMoreComponent,
    StudyProgramComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule


  ],
  exports: [RouterModule],
  providers: [StudentManagementService, MessageServiceService, StudyProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
