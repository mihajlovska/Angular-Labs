import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentManagementService } from './student-management.service';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './src/app/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'list', component: AppComponent },
      {path: 'details/:index', component: StudentDetailsComponent}
    ])
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
