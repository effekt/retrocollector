import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolesPage } from './consoles.page';

describe('ConsolesPage', () => {
  let component: ConsolesPage;
  let fixture: ComponentFixture<ConsolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
