import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { ReprobadoPipe } from './components/content/reprobado.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ListaComponent } from './components/lista/lista.component';

import { MatSliderModule } from '@angular/material/slider';
import { DatosAlumnoComponent } from './components/datos-alumno/datos-alumno.component';
import { AppMaterialModule } from './app.material.module';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';
import { FiltrarEditarPipe } from './components/lista/filtrar-editar.pipe';


const appRoutes:Routes=[
  {path:'',component:InicioComponent},
  {path:'',component:ContentComponent},
  {path:'',component:FormularioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    ContentComponent,
    ReprobadoPipe,
    FormularioComponent,
    InicioComponent,
    FooterComponent,
    ListaComponent,
    DatosAlumnoComponent,
    EditarDialogComponent,
    FiltrarEditarPipe,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
