import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksElementComponent } from './how-it-works-element.component';

describe('HowItWorksElementComponent', () => {
  let component: HowItWorksElementComponent;
  let fixture: ComponentFixture<HowItWorksElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
