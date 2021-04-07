import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public authService: AuthService
  ) { }

  signupForm = this.fb.group({
    username: ['', Validators.required],
    pwd: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })

  ngOnInit(): void {
  }

  signUp() {
    this.authService.register(this.signupForm.value).subscribe(res => {
      //console.log(this.authService.isLoggedin);
      if(res !== undefined){
        this.router.navigate(['/login']);
      }
      //console.log('Res: '+res);
    },
    err => {
      console.log(err);
    });
    
  }

  getErrorMessageEmail(){
    if (this.signupForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.signupForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageUsername(){
    if (this.signupForm.get('username').hasError('required')) {
      return 'You must enter a value';
    }
    return this.signupForm.get('username').hasError('text') ? 'Not a valid username' : '';
  }

  getErrorMessagePassword(){
    if(this.signupForm.get('pwd').hasError('required')){
      return 'You must enter a value';
    }
    return this.signupForm.get('pwd').hasError('password') ? 'Not a valid password' : '';
  }

}
