import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeddingProductComponent } from './bedding-product.component';

describe('BeddingProductComponent', () => {
  let component: BeddingProductComponent;
  let fixture: ComponentFixture<BeddingProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeddingProductComponent]
    });
    fixture = TestBed.createComponent(BeddingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
