import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWingsComponent } from './register-wings.component';

describe('RegisterWingsComponent', () => {
  let component: RegisterWingsComponent;
  let fixture: ComponentFixture<RegisterWingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
