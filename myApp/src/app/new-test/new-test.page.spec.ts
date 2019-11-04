import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestPage } from './new-test.page';

describe('NewTestPage', () => {
  let component: NewTestPage;
  let fixture: ComponentFixture<NewTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
