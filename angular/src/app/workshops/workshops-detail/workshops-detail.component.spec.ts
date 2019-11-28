import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsDetailComponent } from './workshops-detail.component';

describe('WorkshopsDetailComponent', () => {
  let component: WorkshopsDetailComponent;
  let fixture: ComponentFixture<WorkshopsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
