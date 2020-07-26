import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionFieldComponent } from './region-field.component';

describe('RegionFieldComponent', () => {
  let component: RegionFieldComponent;
  let fixture: ComponentFixture<RegionFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
