import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyviewComponent } from './safetyview.component';

describe('SafetyviewComponent', () => {
  let component: SafetyviewComponent;
  let fixture: ComponentFixture<SafetyviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
