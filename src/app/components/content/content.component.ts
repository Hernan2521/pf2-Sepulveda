

import { Component, OnDestroy, OnInit , ViewChild} from '@angular/core';
import { delay, filter, forkJoin, from, interval, map, mergeMap, Observable, of, scan, Subscription, tap } from 'rxjs';
import { RxjsService } from'../../services/rxjs.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';


export interface cursosResumen {
  asignatura : string,	
  parcial1:number,	
  parcial2:number,	
  parcial3:number,
  aprobo:boolean	
}




@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnDestroy, OnInit{
  asignatura: cursosResumen[] = [];



  displayedColumns: string[] = [
    'asignatura',
    'parcial1',
    'parcial2',
    'parcial3',
    'aprobo'
  ];

  dataCurso: cursosResumen[] = [
    {"asignatura":"Quimica","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
    {"asignatura":"Fisica","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
    {"asignatura":"Matematica","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
    {"asignatura":"Lenguaje","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
    {"asignatura":"Musica","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
  ];
// Problema al intentar traer las notas de los servicios. 
  dataSource = new MatTableDataSource(this.dataCurso);



  constructor(
    private rxjsService: RxjsService,
    private dialog: MatDialog
  ){

    this.rxjsService.obtenerObservableAsignatura().subscribe((asignatura) => {
      this.asignatura = asignatura;
    });

   

    
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
  }


  
}