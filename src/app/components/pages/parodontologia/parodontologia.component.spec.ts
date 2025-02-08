import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParodontologiaComponent } from './parodontologia.component';

describe('ParodontologiaComponent', () => {
  let component: ParodontologiaComponent;
  let fixture: ComponentFixture<ParodontologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParodontologiaComponent]
    });
    fixture = TestBed.createComponent(ParodontologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
