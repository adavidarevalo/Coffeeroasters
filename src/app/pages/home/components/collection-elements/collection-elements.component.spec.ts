import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionElementsComponent } from './collection-elements.component';

describe('CollectionElementsComponent', () => {
  let component: CollectionElementsComponent;
  let fixture: ComponentFixture<CollectionElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
