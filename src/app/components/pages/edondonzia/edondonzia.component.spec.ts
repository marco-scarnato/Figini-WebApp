import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdondonziaComponent } from './edondonzia.component';

describe('EdondonziaComponent', () => {
  let component: EdondonziaComponent;
  let fixture: ComponentFixture<EdondonziaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdondonziaComponent]
    });
    fixture = TestBed.createComponent(EdondonziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
