import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTeamComponent } from './intro-team.component';

describe('IntroTeamComponent', () => {
  let component: IntroTeamComponent;
  let fixture: ComponentFixture<IntroTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroTeamComponent]
    });
    fixture = TestBed.createComponent(IntroTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
