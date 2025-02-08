import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTreatmentsComponent } from './intro-treatments.component';

describe('IntroTreatmentsComponent', () => {
  let component: IntroTreatmentsComponent;
  let fixture: ComponentFixture<IntroTreatmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroTreatmentsComponent]
    });
    fixture = TestBed.createComponent(IntroTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
