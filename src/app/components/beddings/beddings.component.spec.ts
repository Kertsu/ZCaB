import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeddingsComponent } from './beddings.component';

describe('BeddingsComponent', () => {
  let component: BeddingsComponent;
  let fixture: ComponentFixture<BeddingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeddingsComponent]
    });
    fixture = TestBed.createComponent(BeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
