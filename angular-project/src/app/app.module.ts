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

const routes: Routes = [
    {path: 'list', component: StudentListComponent },
    {path: 'details/', component: StudentDetailsComponent},
    {path: 'details/:indeks', component: StudentDetailsComponent},
    {path: 'new', component: StudentEditComponent },
    {path: 'edit/:indeks', component: StudentEditComponent}

  ];

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentEditMoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
