import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//INSTITUCIONES //------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  listarInstituciones(){
      return this.http.get('http://localhost:3000/api/instituciones').map(res => res.json());
  }

  crearInstitucion(nuevaInstitucion){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/institucion', nuevaInstitucion, { headers: headers }).map(res => res.json());
  }

  eliminarInstitucion(id){
	  return this.http.delete('http://localhost:3000/api/institucion/'+id).map(res => res.json());
  }  

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//ESCUELAS //------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  listarEscuelas(){
      return this.http.get('http://localhost:3000/api/escuelas').map(res => res.json());
  }

  crearEscuela(nuevaEscuela){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/escuela', nuevaEscuela, { headers: headers }).map(res => res.json());
  }  

  eliminarEscuela(id){
	  return this.http.delete('http://localhost:3000/api/escuela/'+id).map(res => res.json());
  }  
  
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//PROGRAMAS //------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  listarProgramas(){
      return this.http.get('http://localhost:3000/api/programas').map(res => res.json());
  }
  
  crearPrograma(nuevoPrograma){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/programa', nuevoPrograma, { headers: headers }).map(res => res.json());
  }  

  eliminarPrograma(id){
	  return this.http.delete('http://localhost:3000/api/programa/'+id).map(res => res.json());
  }  
  
  
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//MALLAS CURRICULARES //------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  listarMallas(){
      return this.http.get('http://localhost:3000/api/mallas').map(res => res.json());
  }
  
  crearMalla(nuevaMalla){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/malla', nuevaMalla, { headers: headers }).map(res => res.json());
  }
  
  eliminarMalla(id){
	  return this.http.delete('http://localhost:3000/api/malla/'+id).map(res => res.json());
  }  

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//MATERIAS //------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  listarMaterias(){
      return this.http.get('http://localhost:3000/api/materias').map(res => res.json());
  }
  
  crearMateria(nuevaMateria){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/materia', nuevaMateria, { headers: headers }).map(res => res.json());
  }
  
  eliminarMateria(id){
	  return this.http.delete('http://localhost:3000/api/materia/'+id).map(res => res.json());
  }  
  
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//CURSOS //------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  listarCursos(){
      return this.http.get('http://localhost:3000/api/cursos').map(res => res.json());
  }
  
  crearCurso(nuevoCurso){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/curso', nuevoCurso, { headers: headers }).map(res => res.json());
  }  
  
  eliminarCurso(id){
	  return this.http.delete('http://localhost:3000/api/curso/'+id).map(res => res.json());
  }  


//------------------------------------------------------------------------------------------------------------------------------------------------------------
//GRUPOS
//------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  listarGrupos(){
      return this.http.get('http://localhost:3000/api/grupos').map(res => res.json());
  }
  
  crearGrupo(nuevoGrupo){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/grupo', nuevoGrupo, { headers: headers }).map(res => res.json());
  }  
 
   eliminarGrupo(id){
	  return this.http.delete('http://localhost:3000/api/grupo/'+id).map(res => res.json());
  }  
 
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//ESTUDIANTES //------------------------------------------------------------------------------------------------------------------------------------------------------------

  listarEstudiantes(){
      return this.http.get('http://localhost:3000/api/estudiantes').map(res => res.json());
  }  
  
  registrarEstudiante(nuevoEstudiante){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/estudiante', nuevoEstudiante, { headers: headers }).map(res => res.json());
  }

  eliminarEstudiante(id){
	  return this.http.delete('http://localhost:3000/api/estudiante/'+id).map(res => res.json());
  }  

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//PROFESORES //------------------------------------------------------------------------------------------------------------------------------------------------------------

  listarProfesores(){
      return this.http.get('http://localhost:3000/api/profesores').map(res => res.json());
  }  

   registrarProfesor(nuevoProfesor){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/profesor', nuevoProfesor, { headers: headers }).map(res => res.json());
  }

  eliminarProfesor(id){
	  return this.http.delete('http://localhost:3000/api/profesor/'+id).map(res => res.json());
  }  
  
}
