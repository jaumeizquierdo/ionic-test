import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewButtonPagePage } from './new-button-page.page';

describe('NewButtonPagePage', () => {
  let component: NewButtonPagePage;
  let fixture: ComponentFixture<NewButtonPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewButtonPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewButtonPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
