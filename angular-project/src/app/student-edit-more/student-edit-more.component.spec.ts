import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditMoreComponent } from './student-edit-more.component';

describe('StudentEditMoreComponent', () => {
  let component: StudentEditMoreComponent;
  let fixture: ComponentFixture<StudentEditMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
