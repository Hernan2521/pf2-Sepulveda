import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContentComponent } from './components/content/content.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaComponent } from './components/lista/lista.component';
import { DatosAlumnoComponent } from './components/datos-alumno/datos-alumno.component';



const rutas:Routes=[
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path:'inicio',component:InicioComponent},
  {path:'datosAlumno',component:DatosAlumnoComponent},
  {path:'notas',component:ContentComponent},
  {path:'lista',component:ListaComponent},
  {path:'formulario',component:FormularioComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
