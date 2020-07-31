import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginThirdStepComponent } from './login-third-step.component';

describe('LoginThirdStepComponent', () => {
  let component: LoginThirdStepComponent;
  let fixture: ComponentFixture<LoginThirdStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginThirdStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
