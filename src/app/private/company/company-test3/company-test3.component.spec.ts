import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTest3Component } from './company-test3.component';

describe('CompanyTest3Component', () => {
  let component: CompanyTest3Component;
  let fixture: ComponentFixture<CompanyTest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
