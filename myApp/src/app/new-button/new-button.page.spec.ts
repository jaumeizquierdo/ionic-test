import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewButtonPage } from './new-button.page';

describe('NewButtonPage', () => {
  let component: NewButtonPage;
  let fixture: ComponentFixture<NewButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewButtonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
