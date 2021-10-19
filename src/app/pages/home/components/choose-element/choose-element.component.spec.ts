import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseElementComponent } from './choose-element.component';

describe('ChooseElementComponent', () => {
  let component: ChooseElementComponent;
  let fixture: ComponentFixture<ChooseElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
