import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstwhithtabsPage } from './firstwhithtabs.page';

describe('FirstwhithtabsPage', () => {
  let component: FirstwhithtabsPage;
  let fixture: ComponentFixture<FirstwhithtabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstwhithtabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstwhithtabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
