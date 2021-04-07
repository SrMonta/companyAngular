import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
    ) { }

  loginFailed: boolean = false;

  loginForm = this.fb.group({
    username: ['',Validators.required],
    pwd: ['',Validators.required]
  })

  logIn() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      //this.authService.setToken(data.token);
      //console.log(data);
      //console.log('Logged In? -> ' + this.authService.isLoggedin)
      if(data !== undefined){
        this.loginFailed = false;
        this.router.navigate(['/home']);
        return;
      }
      this.loginFailed = true;
    });
  }

  

  getErrorMessageUsername() {
    if (this.loginForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.hasError('username') ? 'Enter username' : '';
  }
  getErrorMessagePassword() {
    if (this.loginForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.hasError('pwd') ? 'Enter password' : '';
  }

  ngOnInit(): void {
  }

}
