import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionTwoComponent } from './home-section-two.component';

describe('HomeSectionTwoComponent', () => {
  let component: HomeSectionTwoComponent;
  let fixture: ComponentFixture<HomeSectionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSectionTwoComponent]
    });
    fixture = TestBed.createComponent(HomeSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
