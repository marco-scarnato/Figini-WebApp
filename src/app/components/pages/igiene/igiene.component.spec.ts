import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgieneComponent } from './igiene.component';

describe('IgieneComponent', () => {
  let component: IgieneComponent;
  let fixture: ComponentFixture<IgieneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgieneComponent]
    });
    fixture = TestBed.createComponent(IgieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
