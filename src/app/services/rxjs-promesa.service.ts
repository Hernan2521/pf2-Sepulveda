import { Injectable } from '@angular/core';
import dataColegio from 'src/app/data.json'
@Injectable({
  providedIn: 'root'
})
export class RxjsPromesaService {
   token: string='existe';
   // token, generado en inicio de sesion.
   key: number=83;
   //key es el id que referencia al alumno, debiera ingresarse cuando se incia sesion el alumno.
   nombres: any[] = dataColegio.alumnos;
  constructor() {
  }
  obtenerNombres(){
    return new Promise((resolve,reject)=>{
     
        if(this.token==='existe'){
           resolve(this.nombres.filter(obj => {
            return obj.id === this.key
          }));
        }else{
          reject({
            codigo:404,
            mensaje:'No esta ingresado el token de ningun alumno'
          });
        }
      
    })
  } 
}
