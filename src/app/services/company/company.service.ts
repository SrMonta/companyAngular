import { Injectable } from '@angular/core';
import { Company } from '../../data/company';
import { Observable, Subject, of} from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyUrl = 'http://localhost:3000/company';  // URL to web api

  //private companies = new Subject<Company[]>();
  //public companies$ = this.companies.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ 
      //'Content-Type': 'application/json'
      //,'Access-Control-Allow-Origin':'*'
    })
  };
/*
  httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
     }), 
     responseType: 'text' as 'json' }; */

  constructor(
    private http: HttpClient,
    ) { }

  /** GET companies from the server */
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl,this.httpOptions)
      .pipe(
        catchError(this.handleError<Company[]>('getCompanies'))
      );
  }

  getCompanies2(){
    return this.http.get(this.companyUrl,this.httpOptions);
  }

  /** GET company data from the server. 404 if name not found*/
  getCompany(name: string): Observable<Company> {
    const url = `${this.companyUrl}/${name}`;
    return this.http.get<Company>(url)
    .pipe(
      catchError(this.handleError<Company>('getCompany')
      )
    );
  }

  /** POST: add new company to the server */
  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.companyUrl,company,this.httpOptions)
    .pipe(
      catchError(this.handleError<Company>('addCompany'))
    );
  }

  /** PUT: update a new company to the server */
  updateCompany(company: Company): Observable<Company> {
    const url = `${this.companyUrl}/${company.cName}`;
    return this.http.put<Company>(url,company, this.httpOptions)
    .pipe(
      catchError(this.handleError<Company>('updateCompany'))
    );
  }

  /** DELETE: delete the company from the server 
   * @param company -> company name
  */
  deleteCompany(company: string): Observable<Company> {
     const url = `${this.companyUrl}/${company}`;
     return this.http.delete<Company>(url, this.httpOptions).pipe(
       catchError(this.handleError<Company>('deleteCompany'))
     );
   } 

  //  /** POST: add a new company to the server */
  //  addCompany(name: string,phone:string,address:string,email:string): Observable<Company> {
  //    return this.http.post<Company>(this.companyUrl, hero, this.httpOptions).pipe(
  //      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //      catchError(this.handleError<Hero>('addHero'))
  //    );
  //  }

//   /** GET hero by id. Will 404 if id not found */
//   getHero(id: number): Observable<Hero> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.get<Hero>(url).pipe(
//       tap(_ => this.log(`fetched hero id=${id}`)),
//       catchError(this.handleError<Hero>(`getHero id=${id}`))
//     );
//   }

//   /** PUT: update the hero on the server */
//   updateHero(hero: Hero): Observable<any> {
//     return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
//       tap(_ => this.log(`updated hero id=${hero.id}`)),
//       catchError(this.handleError<any>('updateHero'))
//     );
//   }

//   /** POST: add a new hero to the server */
//   addHero(hero: Hero): Observable<Hero> {
//     return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
//       tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
//       catchError(this.handleError<Hero>('addHero'))
//     );
//   }

//   /** DELETE: delete the hero from the server */
//   deleteHero(hero: Hero | number): Observable<Hero> {
//     const id = typeof hero === 'number' ? hero : hero.id;
//     const url = `${this.heroesUrl}/${id}`;

//     return this.http.delete<Hero>(url, this.httpOptions).pipe(
//       tap(_ => this.log(`deleted hero id=${id}`)),
//       catchError(this.handleError<Hero>('deleteHero'))
//     );
//   }

//   /* GET heroes whose name contains search term */
//   searchHeroes(term: string): Observable<Hero[]> {
//     if (!term.trim()) {
//       // if not search term, return empty hero array.
//       return of([]);
//     }
//     return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
//       tap(x => x.length ?
//         this.log(`found heroes matching "${term}"`) :
//         this.log(`no heroes matching "${term}"`)),
//       catchError(this.handleError<Hero[]>('searchHeroes', []))
//     );
//   }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      //window.alert(error.error.errors[0].msg);
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

