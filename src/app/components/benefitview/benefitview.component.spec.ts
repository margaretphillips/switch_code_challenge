import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitviewComponent } from './benefitview.component';

describe('BenefitviewComponent', () => {
  let component: BenefitviewComponent;
  let fixture: ComponentFixture<BenefitviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
