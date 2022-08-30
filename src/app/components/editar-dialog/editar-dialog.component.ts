import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatLine } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso} from '../lista/lista.component';


@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Curso
  ) { 
    this.formulario = fb.group({
      id: new FormControl(data.id),
      nombre:new FormControl(data.nombre),
      apellido:new FormControl(data.apellido),
      numero:new FormControl(data.numero),
      mail: new FormControl(data.mail)
    })
  }

  ngOnInit(): void {
  }
actualizar(){
  this.dialogRef.close(this.formulario.value);
}
cerrar(){
  this.dialogRef.close();
}
}
