import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentManagementService } from './student-management.service';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudetnEditComponent } from './student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudetnEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'student', component: StudentDetailsComponent}
    ])
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
