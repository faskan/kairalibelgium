import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramScheduleViewOnlyComponent } from './program-schedule-view-only.component';

describe('ProgramScheduleViewOnlyComponent', () => {
  let component: ProgramScheduleViewOnlyComponent;
  let fixture: ComponentFixture<ProgramScheduleViewOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramScheduleViewOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramScheduleViewOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
