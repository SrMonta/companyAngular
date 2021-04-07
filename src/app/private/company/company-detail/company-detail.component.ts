import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Company } from '../../../data/company';
import { CompanyService } from '../../../services/company/company.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  
  company$: Observable<Company>;
  selectedId: number;
  title: string;
  companySelected: string;

  constructor(
    private service: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.company$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.companySelected = params.get('cName');
        return this.service.getCompany(this.companySelected);
        
      }
        //this.service.getCompany(params.get('cName')))
    ))//;
  }

  goBack(): void{
    this.location.back();
  }
}
