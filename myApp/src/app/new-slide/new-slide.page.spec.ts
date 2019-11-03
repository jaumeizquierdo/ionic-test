import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSlidePage } from './new-slide.page';

describe('NewSlidePage', () => {
  let component: NewSlidePage;
  let fixture: ComponentFixture<NewSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSlidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
