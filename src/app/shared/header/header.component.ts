import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/data/menu-item';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      link: '/home',
      showOnDesktop: true,
      showOnTablet: false,
      showOnMobile: false
      
    },
    {
      label: 'Company',
      icon: 'business',
      link: '/company',
      showOnDesktop: true,
      showOnTablet: true,
      showOnMobile: false
    },
    {
      label: 'Login',
      icon: 'login',
      link: '/login',
      showOnDesktop: true,
      showOnTablet: true,
      showOnMobile: true
    },
    {
      label: 'Signup',
      icon: 'create',
      link: '/signup',
      showOnDesktop: true,
      showOnTablet: true,
      showOnMobile: false
    },
    {
      label: 'About',
      icon: 'info',
      showOnDesktop: false,
      showOnTablet: false,
      showOnMobile: false
    }
  ];
  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    //Comprobamos que existan en localStorage
    //this.authService.showLoginButtons();
    if(this.authService.isAuthenticated()){
      this.authService.isLoggedin = true;
      this.authService.loggedUsername = localStorage.getItem('username');
    }
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  show(label: string): boolean{
    if(label === 'Login' || label === 'Signup'){
      return !this.authService.isLoggedin
    }
    return true
  }

}
