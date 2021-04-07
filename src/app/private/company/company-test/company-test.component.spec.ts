import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTestComponent } from './company-test.component';

describe('CompanyTestComponent', () => {
  let component: CompanyTestComponent;
  let fixture: ComponentFixture<CompanyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
