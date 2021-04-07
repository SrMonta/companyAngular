import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CompanyService } from '../../../services/company/company.service';
import { Company } from '../../../data/company';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  
  companies: Company[];
  //selectedId: number;
  //selectedCompany: string;
  title: string;

  //companies: any = [];

  constructor(
    private companyService: CompanyService,
    //private route: ActivatedRoute,
    //private router: Router,
    private location: Location,
    public dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.title="companies area!";
    this.getCompanies();
  }

  getCompanies(){
    console.log('Entro en getCompanies() del componente');
    this.companyService.getCompanies().subscribe(
      res => {
        console.log(res);
        this.companies = res;
      },
      err => console.log(err)
    );
  }

  /**
   * 
   * @param name: nombre de la compañia a borrar
   */
  deleteCompany(name: string){
    console.log('Entro en deleteCompany() del componente');
    this.companyService.deleteCompany(name).subscribe(
      res => {
        this.getCompanies();
      },
      err => console.log(err)
    )
    //this.update();
    //this.getCompanies();
  }

  goBack(): void {
    this.location.back();
  }

  confirmDelete(name: string): void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: "Delete data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteCompany(name);
      }
    });
  }
}

