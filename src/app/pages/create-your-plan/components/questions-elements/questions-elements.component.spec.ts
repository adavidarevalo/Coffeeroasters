import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsElementsComponent } from './questions-elements.component';

describe('QuestionsElementsComponent', () => {
  let component: QuestionsElementsComponent;
  let fixture: ComponentFixture<QuestionsElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
