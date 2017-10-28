import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetnEditComponent } from './student-edit.component';

describe('StudetnEditComponent', () => {
  let component: StudetnEditComponent;
  let fixture: ComponentFixture<StudetnEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudetnEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudetnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
