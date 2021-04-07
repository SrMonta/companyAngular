import { Component, OnInit } from '@angular/core';
import { CompanyTestService } from 'src/app/services/company/company-test.service';
import { Company } from '../../../data/company';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { Booking } from './booking';
import { DatePipe } from '@angular/common';


export const MY_FORMAT_DATE = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-company-list-test',
  templateUrl: './company-list-test.component.html',
  styleUrls: ['./company-list-test.component.css'],
  providers: [
    DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMAT_DATE}
  ]
})


export class CompanyListTestComponent implements OnInit {

  constructor(
    private companyTestService: CompanyTestService,
    private _formBuilder: FormBuilder,
    public datePipe: DatePipe
    ) { 
    }

  
  bookingForm: FormGroup;
  minDate= new Date();
  
  //isLinear = false;
  clickedname: string;
  firstFormGroup: FormGroup;
  companies: Company [];

  hours: string[] = [
    '7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00',
    '16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'
  ];

  // hoursTest: string[][] = [
  //   ['7','8','9','10','11','12','13'],
  //   ['14','15','16','17','18','19','20'],
  //   ['21','22','23']
  // ]

  // hoursTest2: string [][] = [
  //   ['7','14','21'],
  //   ['8','15','22'],
  //   ['9','16','23'],
  //   ['10','17'],
  //   ['11','18'],
  //   ['12','19'],
  //   ['13','20']
  // ]

  booked: Booking[];
  bookedDay: Booking[];
  dateSelected: string;

  disabled(hour: string): boolean{
    //if(this.bookedHours.includes(hour)) return true;
    //return false;
    const result = this.booked.filter(book => book.date === this.dateSelected && book.hour === hour);
    if(result.length > 0) return true;
    return false;
  }

  clicked(name: string){
    this.clickedname = name;
  }

  hourButtonSelected(hour: string){
    this.bookingForm.patchValue({
      hora: hour
    });
  }

  getDateSelected(){
    return this.datePipe.transform(this.bookingForm.get('day').value, 'dd-MM-yyyy')
  }

  addOneHour(hour: string): string{
    switch(hour){
        case '7:00': return '8:00';
        case '8:00': return '9:00';
        case '9:00': return '10:00';
        case '10:00': return '11:00';
        case '11:00': return '12:00';
        case '12:00': return '13:00';
        case '13:00': return '14:00';
        case '14:00': return '15:00';
        case '15:00': return '16:00';
        case '16:00': return '17:00';
        case '17:00': return '18:00';
        case '18:00': return '19:00';
        case '19:00': return '20:00';
        case '20:00': return '21:00';
        case '21:00': return '22:00';
        case '22:00': return '23:00';
        case '23:00': return '00:00';
        default: return 'error';
    }
}

  maxHour(hour: string){
    if(hour === '23:00') return true;
    const result = this.booked.filter(book => book.date === this.dateSelected && book.hour === this.addOneHour(hour));
    if(result.length > 0) return true;
    return false;
  }

  next(selectedDate: string){
    this.dateSelected = this.datePipe.transform(this.bookingForm.get('day').value,'dd-MM-yyyy');
    this.bookedDay = this.booked.filter(book => book.date === selectedDate)
    //console.log(this.booked.toString());
    //window.alert('Next!')
    //this.bookedHours = ['11:00','13:00','16:00','17:00'];
  }
  test(){
    window.alert('Reserva realizada');
    
  }

  // EVITAR SELECCIONAR DOMINGOS
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Sunday from being selected.
    return day !== 6;
  }

  ngOnInit(): void {
    this.bookingForm = this._formBuilder.group({
      sala: ['', Validators.required],
      day: ['', Validators.required],
      hora: ['', Validators.required],
      numero_horas: ['', Validators.required]
    });

    //TEST PARA VER SI RELLENA SOLO
    this.bookingForm.patchValue({
      sala: '1',
      day: '05-04-2021', //Wed Mar 31 2021 00:00:00 GMT+0200
      hora: '11:00',
      numero_horas: '2'
    })

    this.booked = [{
      name: 'one',
      date: '29-03-2021',
      hour: '10:00'
    },
    {
      name: 'two',
      date: '29-03-2021',
      hour: '11:00'
    },  
    {
      name: 'two',
      date: '29-03-2021',
      hour: '12:00'
    },
    
    {
      name: 'two',
      date: '29-03-2021',
      hour: '19:00'
    },
    {
      name: 'two',
      date: '29-03-2021',
      hour: '20:00'
    },
    {
      name: 'three',
      date: '30-03-2021',
      hour: '10:00'
    },
    {
      name: 'three',
      date: '28-03-2021',
      hour: '6:00'
    }]
    //this.bookedHours = ['11:00','13:00','16:00','17:00'];
    //this.getCompanies();
  }

  
  getCompanies(){
    console.log('Entro en getCompanies() del componente');
    this.companyTestService.getCompanies().subscribe(
      res => {
        console.log(res);
        this.companies = res;
      },
      err => console.log(err)
    );
  }

  update(){
    this.getCompanies();
  }

}
