import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyNewComponent } from './company/company-new/company-new.component';
import { CompanyListTestComponent } from './company/company-list-test/company-list-test.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { CompanyTestComponent } from './company/company-test/company-test.component';
import { CompanyTest3Component } from './company/company-test3/company-test3.component';
import { CompanyTest4Component } from './company/company-test4/company-test4.component';

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyNewComponent,
    CompanyListTestComponent,
    UserDetailsComponent,
    CompanyTestComponent,
    CompanyTest3Component,
    CompanyTest4Component
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatStepperModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    MatDatepickerModule,
  ]
})
export class PrivateModule { }
