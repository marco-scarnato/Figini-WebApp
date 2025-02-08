import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtodonziaComponent } from './ortodonzia.component';

describe('OrtodonziaComponent', () => {
  let component: OrtodonziaComponent;
  let fixture: ComponentFixture<OrtodonziaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrtodonziaComponent]
    });
    fixture = TestBed.createComponent(OrtodonziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
