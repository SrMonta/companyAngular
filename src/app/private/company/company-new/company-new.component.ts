import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company/company.service';
import { Company } from '../../../data/company';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) { }

  editCompany: boolean = false;

  newCompanyForm: FormGroup;

  /*
  newCompanyForm = this.fb.group({
    cName: [{value:'', disabled: this.editCompany}, Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })*/

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if(params.cName){ //Esta el nombre, queremos editar
      this.editCompany=true;
      this.companyService.getCompany(params.cName)
      .subscribe(
        res => {
          //console.log(res);
          
          this.newCompanyForm.patchValue({
            cName: res.cName,
            phone: res.phone,
            address: res.address,
            email: res.email
          });
        },
        err => console.log('Error: '+err)
      )
    }
    this.newCompanyForm = this.fb.group({
      cName: [{value:'', disabled: this.editCompany}, Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  updateCompany(){
    const updatedCompany: Company = this.newCompanyForm.value;
    this.companyService.updateCompany(updatedCompany).subscribe(data => {

    });
  }

  createCompany(){
    const newCompany: Company = this.newCompanyForm.value;
    this.companyService.addCompany(newCompany).subscribe(data => {
      window.alert('Company created!');
      this.router.navigate(['/company']);
    });
    //this.router.navigate(['/company']);
  }

  getErrorMessageEmail(){
    if (this.newCompanyForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.newCompanyForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageName(){
    if (this.newCompanyForm.get('cName').hasError('required')) {
      return 'You must enter a value';
    }
    return this.newCompanyForm.get('cName').hasError('text') ? 'Not a valid company name' : '';
  }

  getErrorMessageAddress(){
    if(this.newCompanyForm.get('address').hasError('required')){
      return 'You must enter a value';
    }
    return this.newCompanyForm.get('address').hasError('text') ? 'Not a valid address' : '';
  }

  getErrorMessagePhone() {
    if(this.newCompanyForm.get('phone').hasError('required')){
      return 'You must enter a value';
    }
    return this.newCompanyForm.get('phone').hasError('text') ? 'Not a valid phone number' : '';
  }

}
