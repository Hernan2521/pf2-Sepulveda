import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaEstudiantes: Array<any> =[
    {asignatura:'Quimica',primerCertamen:2,segundoCertamen:2,tercerCertamen:3},
    {asignatura:'Fisica',primerCertamen:5,segundoCertamen:3,tercerCertamen:7},
    {asignatura:'Matematica',primerCertamen:4,segundoCertamen:3,tercerCertamen:8},
    {asignatura:'Musica',primerCertamen:1,segundoCertamen:9,tercerCertamen:10},
    {asignatura:'Lenguaje',primerCertamen:5,segundoCertamen:6,tercerCertamen:7},
  ]
}


/*

<form> 
  <label>Nombre: </label>
  <input type="text" [(ngModel)]="contactoModel.nombre" name="nombre" #txtNombre>
  <br>

  <label>Correo: </label>
  <input type="text" [(ngModel)]="contactoModel.correo" name="correo">
  <br>

  <label>Mensaje: </label>
  <input type="text" [(ngModel)]="contactoModel.mensaje" name="mensaje">
  <br>

  <button (click)="enviarContacto()">Enviar</button>
</form>
contactoModel: any = {
  nombre: '',
  correo: '',
  mensaje: '' 
};
*/