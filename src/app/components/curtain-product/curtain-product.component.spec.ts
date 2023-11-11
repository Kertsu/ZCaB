import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainProductComponent } from './curtain-product.component';

describe('CurtainProductComponent', () => {
  let component: CurtainProductComponent;
  let fixture: ComponentFixture<CurtainProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurtainProductComponent]
    });
    fixture = TestBed.createComponent(CurtainProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
