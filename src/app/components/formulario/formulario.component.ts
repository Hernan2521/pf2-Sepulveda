import { Component, Input,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import dataColegio from 'src/app/data.json'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {

  listaEstudiantes: Array<any> =  dataColegio.alumnos[0].notas
  //@Input() notas: Array<any> =[];
  formulario: FormGroup = new FormGroup({
    asignatura: new FormControl(''),
    mensaje: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
