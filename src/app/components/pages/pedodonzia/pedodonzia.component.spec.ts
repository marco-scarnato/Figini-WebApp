import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedodonziaComponent } from './pedodonzia.component';

describe('PedodonziaComponent', () => {
  let component: PedodonziaComponent;
  let fixture: ComponentFixture<PedodonziaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedodonziaComponent]
    });
    fixture = TestBed.createComponent(PedodonziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
