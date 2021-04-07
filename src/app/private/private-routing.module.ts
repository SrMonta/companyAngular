import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyListTestComponent } from './company/company-list-test/company-list-test.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyNewComponent } from './company/company-new/company-new.component';
import { CompanyTestComponent } from './company/company-test/company-test.component';
import { CompanyTest3Component } from './company/company-test3/company-test3.component';
import { CompanyTest4Component } from './company/company-test4/company-test4.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

const privateRoutes: Routes = [
    { path: 'company', component: CompanyListComponent/*, canActivate: [AuthGuard]*/},
    { path: 'test', component: CompanyListTestComponent},
    { path: 'test2', component: CompanyTestComponent},
    { path: 'test3', component: CompanyTest3Component},
    { path: 'test4', component: CompanyTest4Component }, 
    { path: 'company/new', component: CompanyNewComponent, canActivate: [AuthGuard]},
    { path: 'company/:cName', component: CompanyDetailComponent, canActivate: [AuthGuard]},
    { path: 'company/:cName/edit', component: CompanyNewComponent, canActivate: [AuthGuard]},
    { path: 'user/:username/info', component: UserDetailsComponent, canActivate: [AuthGuard]},
    

];

@NgModule({
  imports: [
    RouterModule.forChild(privateRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class PrivateRoutingModule { }