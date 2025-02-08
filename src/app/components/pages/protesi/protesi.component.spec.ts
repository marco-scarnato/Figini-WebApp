import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtesiComponent } from './protesi.component';

describe('ProtesiComponent', () => {
  let component: ProtesiComponent;
  let fixture: ComponentFixture<ProtesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtesiComponent]
    });
    fixture = TestBed.createComponent(ProtesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
