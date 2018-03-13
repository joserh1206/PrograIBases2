import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  //------------------------------------------------------------------------------------------------------------------------------------------
  //INSTITUCIONES
  //------------------------------------------------------------------------------------------------------------------------------------------
    
  listarInstituciones(){
      return this.http.get('http://localhost:3000/api/instituciones').map(res => res.json());
  }
    
  agregarInstitucion(nuevaInstitucion){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/institucion', nuevaInstitucion, { headers: headers }).map(res => res.json());      
  }
    
  actualizarInstitucion(nuevaInstitucion){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
	  return this.http.put('http://localhost:3000/api/institucion/'+nuevaInstitucion._id, nuevaInstitucion, { headers: headers }).map(res => res.json());      
  }
  
    
  borrarInstitucion(id){
	  return this.http.delete('http://localhost:3000/api/institucion/'+id).map(res => res.json());
  }

  //------------------------------------------------------------------------------------------------------------------------------------------
  //ESCUELAS
  //------------------------------------------------------------------------------------------------------------------------------------------

  listarEscuelas(){
      return this.http.get('http://localhost:3000/api/escuelas').map(res => res.json());
  }
    
  agregarEscuela(nuevaEscuela){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/escuela', nuevaEscuela, { headers: headers }).map(res => res.json());      
  }
    
  actualizarEscuela(nuevaEscuela){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
	  return this.http.put('http://localhost:3000/api/escuela/'+nuevaEscuela._id, nuevaEscuela, { headers: headers }).map(res => res.json());      
  }
  
    
  borrarEscuela(id){
	  return this.http.delete('http://localhost:3000/api/escuela/'+id).map(res => res.json());
  }

  //------------------------------------------------------------------------------------------------------------------------------------------
  //PROGRAMAS ACADÉMICOS
  //------------------------------------------------------------------------------------------------------------------------------------------

  listarProgramasA(){
      return this.http.get('http://localhost:3000/api/programasA').map(res => res.json());
  }
    
  agregarProgramaA(nuevoProgA){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/programaA', nuevoProgA, { headers: headers }).map(res => res.json());      
  }
    
  actualizarProgramaA(nuevoProgA){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
	  return this.http.put('http://localhost:3000/api/escuela/'+nuevoProgA._id, nuevoProgA, { headers: headers }).map(res => res.json());      
  }
  
    
  borrarProgramaA(id){
	  return this.http.delete('http://localhost:3000/api/programaA/'+id).map(res => res.json());
  }

  //------------------------------------------------------------------------------------------------------------------------------------------
  //MALLAS CURRICULARES
  //------------------------------------------------------------------------------------------------------------------------------------------

  listarMallasC(){
      return this.http.get('http://localhost:3000/api/mallasC').map(res => res.json());
  }
    
  agregarMallaC(nuevaMalla){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/mallaC', nuevaMalla, { headers: headers }).map(res => res.json());      
  }
    
  actualizarMallaC(nuevaMalla){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
	  return this.http.put('http://localhost:3000/api/mallaC/'+nuevaMalla._id, nuevaMalla, { headers: headers }).map(res => res.json());      
  }
  
    
  borrarMallaC(id){
	  return this.http.delete('http://localhost:3000/api/mallaC/'+id).map(res => res.json());
  }

  //------------------------------------------------------------------------------------------------------------------------------------------
  //MATERIAS
  //------------------------------------------------------------------------------------------------------------------------------------------

  listarMaterias(){
      return this.http.get('http://localhost:3000/api/materias').map(res => res.json());
  }
    
  agregarMateria(nuevaMateria){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/materia', nuevaMateria, { headers: headers }).map(res => res.json());      
  }
    
  actualizarMateria(nuevaMateria){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
	  return this.http.put('http://localhost:3000/api/materia/'+nuevaMateria._id, nuevaMateria, { headers: headers }).map(res => res.json());      
  }
  
    
  borrarMateria(id){
	  return this.http.delete('http://localhost:3000/api/materia/'+id).map(res => res.json());
  }
    
  //------------------------------------------------------------------------------------------------------------------------------------------
  //CURSOS
  //------------------------------------------------------------------------------------------------------------------------------------------

  listarCursos(){
      return this.http.get('http://localhost:3000/api/cursos').map(res => res.json());
  }
    
  agregarCurso(nuevoCurso){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/curso', nuevoCurso, { headers: headers }).map(res => res.json());      
  }
    
  actualizarCurso(nuevoCurso){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
	  return this.http.put('http://localhost:3000/api/curso/'+nuevoCurso._id, nuevoCurso, { headers: headers }).map(res => res.json());      
  }
  
    
  borrarCurso(id){
	  return this.http.delete('http://localhost:3000/api/curso/'+id).map(res => res.json());
  }
    
  //------------------------------------------------------------------------------------------------------------------------------------------
  //GRUPOS
  //------------------------------------------------------------------------------------------------------------------------------------------

  listarGrupos(){
      return this.http.get('http://localhost:3000/api/grupos').map(res => res.json());
  }
    
  agregarGrupo(nuevoGrupo){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/grupo', nuevoGrupo, { headers: headers }).map(res => res.json());      
  }
    
  actualizarGrupo(nuevoGrupo){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
	  return this.http.put('http://localhost:3000/api/grupo/'+nuevoGrupo._id, nuevoGrupo, { headers: headers }).map(res => res.json());      
  }
  
    
  borrarGrupo(id){
	  return this.http.delete('http://localhost:3000/api/grupo/'+id).map(res => res.json());
  }

  //------------------------------------------------------------------------------------------------------------------------------------------
  //PROFESORES
  //------------------------------------------------------------------------------------------------------------------------------------------

    
  listarProfesores(){
      return this.http.get('http://localhost:3000/api/profesores').map(res => res.json());  
  }
        
  registrarProfesor(nuevoProfesor){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/profesor', nuevoProfesor, { headers: headers }).map(res => res.json());
  }
    
  actualizarProfesor(nuevoProfesor){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
	  return this.http.put('http://localhost:3000/api/profesor/'+nuevoProfesor._id, nuevoProfesor, { headers: headers }).map(res => res.json());      
  }

  borrarProfesor(id){
	  return this.http.delete('http://localhost:3000/api/profesor/'+id).map(res => res.json());
  }

    
  //------------------------------------------------------------------------------------------------------------------------------------------
  //ESTUDIANTES
  //------------------------------------------------------------------------------------------------------------------------------------------

    
  listarEstudiantes(){
      return this.http.get('http://localhost:3000/api/estudiantes').map(res => res.json());
  }
        
  registrarEstudiante(nuevoEstudiante){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
      return this.http.post('http://localhost:3000/api/estudiante', nuevoEstudiante, { headers: headers }).map(res => res.json());
  }
    
  actualizarEstudiante(nuevoEstudiante){
      let headers = new Headers();
      headers.append('Content.Type', 'application/json');
	  return this.http.put('http://localhost:3000/api/estudiante/'+nuevoEstudiante._id, nuevoEstudiante, { headers: headers }).map(res => res.json());      
  }

  borrarEstudiante(id){
	  return this.http.delete('http://localhost:3000/api/estudiante/'+id).map(res => res.json());
  }

    
}
