import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
//import dataColegio from 'src/app/data.json'

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  asignatura: any[] = [
    {"asignatura":"Quimica","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
    {"asignatura":"Fisica","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
    {"asignatura":"Matematica","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
    {"asignatura":"Lenguaje","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
    {"asignatura":"Musica","parcial1":2,"parcial2":2,"parcial3":3,'aprobo':true},
  ];
  asignaturaObservable: Observable<any>;
 
 


  constructor() {
    

    this.asignaturaObservable = new Observable<any>((suscriptor) => {
      suscriptor.next(this.asignatura);
    });
  }

  obtenerPromiseAsignatura(){
    return new Promise((resolve, reject) => {
      if(this.asignatura.length > 0){
        resolve(this.asignatura);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No Hay cursos inscritos'
        });
      }
    });
  }

  obtenerObservableAsignatura(){
    return this.asignaturaObservable;
  }





}