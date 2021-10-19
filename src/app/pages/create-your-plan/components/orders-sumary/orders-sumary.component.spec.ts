import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSumaryComponent } from './orders-sumary.component';

describe('OrdersSumaryComponent', () => {
  let component: OrdersSumaryComponent;
  let fixture: ComponentFixture<OrdersSumaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersSumaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
