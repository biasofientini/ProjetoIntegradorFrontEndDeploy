import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListAdmComponent } from './product-list-adm.component';

describe('ProductListAdmComponent', () => {
  let component: ProductListAdmComponent;
  let fixture: ComponentFixture<ProductListAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
