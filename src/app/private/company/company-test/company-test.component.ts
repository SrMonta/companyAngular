import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Reserva {
  sala: string;
  hora: string;
  numero_horas: number;
  descripcion: string;
}

const DATOS_RESERVA: Reserva[] = [
  {sala:'1',hora:'10:00',numero_horas:1,descripcion:'Estudiando mates'},
  {sala:'2',hora:'11:00',numero_horas:1,descripcion:'Estudiando lengua'},
  {sala:'2',hora:'13:00',numero_horas:1,descripcion:'Estudiando historia'},
  {sala:'3',hora:'17:00',numero_horas:1,descripcion:'Haciendo nada'},
  {sala:'1',hora:'11:00',numero_horas:1,descripcion:'Estudiando fisica'},
  {sala:'6',hora:'9:00',numero_horas:1,descripcion:'Presentacion'},
  {sala:'7',hora:'12:00',numero_horas:1,descripcion:'Estudiando filosofia'},
  {sala:'1',hora:'10:00',numero_horas:1,descripcion:'Estudiando mates'},
  {sala:'2',hora:'11:00',numero_horas:1,descripcion:'Estudiando lengua'},
  {sala:'2',hora:'13:00',numero_horas:1,descripcion:'Estudiando historia'},
  {sala:'3',hora:'17:00',numero_horas:1,descripcion:'Haciendo nada'},
  {sala:'1',hora:'11:00',numero_horas:1,descripcion:'Estudiando fisica'},
  {sala:'6',hora:'9:00',numero_horas:1,descripcion:'Presentacion'},
  {sala:'7',hora:'12:00',numero_horas:1,descripcion:'Estudiando filosofia'},
  {sala:'1',hora:'10:00',numero_horas:1,descripcion:'Estudiando mates'},
  {sala:'2',hora:'11:00',numero_horas:1,descripcion:'Estudiando lengua'},
  {sala:'2',hora:'13:00',numero_horas:1,descripcion:'Estudiando historia'},
  {sala:'3',hora:'17:00',numero_horas:1,descripcion:'Haciendo nada'},
  {sala:'1',hora:'11:00',numero_horas:1,descripcion:'Estudiando fisica'},
  {sala:'6',hora:'9:00',numero_horas:1,descripcion:'Presentacion'},
  {sala:'7',hora:'12:00',numero_horas:1,descripcion:'Estudiando filosofia'},
  {sala:'1',hora:'10:00',numero_horas:1,descripcion:'Estudiando mates'},
  {sala:'2',hora:'11:00',numero_horas:1,descripcion:'Estudiando lengua'},
  {sala:'2',hora:'13:00',numero_horas:1,descripcion:'Estudiando historia'},
  {sala:'3',hora:'17:00',numero_horas:1,descripcion:'Haciendo nada'},
  {sala:'1',hora:'11:00',numero_horas:1,descripcion:'Estudiando fisica'},
  {sala:'6',hora:'9:00',numero_horas:1,descripcion:'Presentacion'},
  {sala:'7',hora:'12:00',numero_horas:1,descripcion:'Estudiando filosofia'},
];

@Component({
  selector: 'app-company-test',
  templateUrl: './company-test.component.html',
  styleUrls: ['./company-test.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CompanyTestComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //displayedColumns: string[] = ['sala','hora','numero_horas','descripcion'];
  columnsToDisplay: string[] = ['sala','hora','numero_horas','descripcion','actions'];
  //columnsToDisplay: string[] = ['sala','hora','numero_horas'];
  //dataSource = DATOS_RESERVA;
  expandedElement: Reserva | null;

  dataSource = new MatTableDataSource(DATOS_RESERVA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
