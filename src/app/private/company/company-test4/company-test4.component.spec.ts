import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTest4Component } from './company-test4.component';

describe('CompanyTest4Component', () => {
  let component: CompanyTest4Component;
  let fixture: ComponentFixture<CompanyTest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTest4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
