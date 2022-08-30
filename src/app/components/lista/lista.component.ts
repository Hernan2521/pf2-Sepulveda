
import { Component, Input,OnInit, ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditarDialogComponent } from '../editar-dialog/editar-dialog.component';
import dataColegio from 'src/app/data.json'

export interface Curso{
  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  numero:string;
  curso:string;
}




@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  columnas = ['nombre','apellido','mail','numero','edit'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource(dataColegio.alumnos);
  @ViewChild(MatTable) tabla!: MatTable<Curso>
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
editar(elemento: Curso){
  const dialogRef = this.dialog.open(EditarDialogComponent, {
    width: '350px',
    data: elemento
  });

  dialogRef.afterClosed().subscribe(r=>{
    if(r){
      const item =this.dataSource.data.find(curso=>curso.mail === r.mail);
      const index = this.dataSource.data.indexOf(item);
      this.dataSource.data[index] = r;
      this.tabla.renderRows();
    }
  })
}



}
