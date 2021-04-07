import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListTestComponent } from './company-list-test.component';

describe('CompanyListTestComponent', () => {
  let component: CompanyListTestComponent;
  let fixture: ComponentFixture<CompanyListTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyListTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
