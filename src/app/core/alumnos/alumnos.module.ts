import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClaseComponent } from './components/lista-clase/lista-clase.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    ListaClaseComponent,
    FormularioComponent,
    CursosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlumnosModule { }
