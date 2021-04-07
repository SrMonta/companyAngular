import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('token');

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });

      console.log(request);
    }

    return next.handle(request)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          console.log('Error 401');
          console.log('Err: '+err.error);
          this.router.navigate(['/login']);
          this.authService.logout();
          localStorage.clear(); 
        }
        if (err.status === 400) {
          console.log('Error 400');
          console.log('Err: '+err.error);
          window.alert(err.error);
          //this.router.navigate(['/login']);
          //localStorage.clear(); 
        }
        if (err.status === 403) {
          console.log('Error 403');
          //this.router.navigate(['/login']);
          //localStorage.clear(); 
          window.alert('Unauthorized');
          if(!this.authService.isLoggedin){
            this.router.navigate(['/login']);
          }
        }

        return throwError(err);
      })
    );
  }
}
