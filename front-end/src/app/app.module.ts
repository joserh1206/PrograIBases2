import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegestudiantesComponent } from './regestudiantes/regestudiantes.component';
import { RegprofesoresComponent } from './regprofesores/regprofesores.component';
import { LoginusuariosComponent } from './loginusuarios/loginusuarios.component';
import { CrearinstitucionesComponent } from './crearinstituciones/crearinstituciones.component';
import { MenuprofesorComponent } from './menuprofesor/menuprofesor.component';
import { CrearescuelaComponent } from './crearescuela/crearescuela.component';
import { AgregarprogramaComponent } from './agregarprograma/agregarprograma.component';
import { AgregarmallaComponent } from './agregarmalla/agregarmalla.component';
import { AgregarmateriaComponent } from './agregarmateria/agregarmateria.component';
import { AgregarcursogrupoComponent } from './agregarcursogrupo/agregarcursogrupo.component';
import { VertodoComponent } from './vertodo/vertodo.component';
import { EliminarprofesorComponent } from './eliminarprofesor/eliminarprofesor.component';
import { EliminarestudianteComponent } from './eliminarestudiante/eliminarestudiante.component';


@NgModule({
  declarations: [
    AppComponent,
    RegestudiantesComponent,
    RegprofesoresComponent,
    LoginusuariosComponent,
    CrearinstitucionesComponent,
    MenuprofesorComponent,
    CrearescuelaComponent,
    AgregarprogramaComponent,
    AgregarmallaComponent,
    AgregarmateriaComponent,
    AgregarcursogrupoComponent,
    VertodoComponent,
    EliminarprofesorComponent,
    EliminarestudianteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
