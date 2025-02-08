import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirurgiaComponent } from './chirurgia.component';

describe('ChirurgiaComponent', () => {
  let component: ChirurgiaComponent;
  let fixture: ComponentFixture<ChirurgiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChirurgiaComponent]
    });
    fixture = TestBed.createComponent(ChirurgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
