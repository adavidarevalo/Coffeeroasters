import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadquartersElementsComponent } from './headquarters-elements.component';

describe('HeadquartersElementsComponent', () => {
  let component: HeadquartersElementsComponent;
  let fixture: ComponentFixture<HeadquartersElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadquartersElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadquartersElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
