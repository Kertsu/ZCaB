import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainsComponent } from './curtains.component';

describe('CurtainsComponent', () => {
  let component: CurtainsComponent;
  let fixture: ComponentFixture<CurtainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurtainsComponent]
    });
    fixture = TestBed.createComponent(CurtainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
