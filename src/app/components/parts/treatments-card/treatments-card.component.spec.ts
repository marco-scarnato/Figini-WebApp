import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsCardComponent } from './treatments-card.component';

describe('TreatmentsCardComponent', () => {
  let component: TreatmentsCardComponent;
  let fixture: ComponentFixture<TreatmentsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreatmentsCardComponent]
    });
    fixture = TestBed.createComponent(TreatmentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
