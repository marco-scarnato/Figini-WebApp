import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantologiaComponent } from './implantologia.component';

describe('ImplantologiaComponent', () => {
  let component: ImplantologiaComponent;
  let fixture: ComponentFixture<ImplantologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImplantologiaComponent]
    });
    fixture = TestBed.createComponent(ImplantologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
