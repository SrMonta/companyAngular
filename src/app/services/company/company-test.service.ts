import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Company } from '../../data/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyTestService {

  private companyUrl = 'http://localhost:3000/company';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getCompanies(): Observable<Company[]> {
    console.log('Entro en getCompanies() del servicio');
    return this.http.get<Company[]>(this.companyUrl);
  }

  deleteCompany(name: string): Observable<Company>{
    console.log('Entro en deleteCompnay() del servicio');
    const url = `${this.companyUrl}/${name}`;
    return this.http.delete<Company>(url);
  }
}
