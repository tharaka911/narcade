import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTempleComponent } from './product-temple.component';

describe('ProductTempleComponent', () => {
  let component: ProductTempleComponent;
  let fixture: ComponentFixture<ProductTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
