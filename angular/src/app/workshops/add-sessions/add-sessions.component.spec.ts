import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionsComponent } from './add-sessions.component';

describe('AddSessionsComponent', () => {
  let component: AddSessionsComponent;
  let fixture: ComponentFixture<AddSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
