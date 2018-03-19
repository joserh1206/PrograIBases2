import { Component, OnInit } from '@angular/core';
import { Institucion } from '../institucion';
import { Escuela } from '../escuela';
import { Programa } from '../programa';
import { Malla } from '../malla';
import { Materia } from '../materia';
import { Curso } from '../curso';
import { Grupo } from '../grupo';
import { Estudiante } from '../estudiante';
import { Profesor } from '../profesor';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vertodo',
  templateUrl: './vertodo.component.html',
  styleUrls: ['./vertodo.component.css'],
  providers: [DataService]
})
export class VertodoComponent implements OnInit {

  instituciones: Institucion[];
  escuelas: Escuela[];
  programas: Programa[];
  mallas: Malla[];
  materias: Materia[];
  cursos: Curso[];
  grupos: Grupo[];
  estudiantes: Estudiante[];
  profesores: Profesor[];

  constructor(private dataService: DataService) { }

    listarTodo(){
      this.dataService.listarInstituciones().subscribe( insts => {
          this.instituciones = insts;
          //console.log(this.instituciones);
	  });
	  this.dataService.listarEscuelas().subscribe( escs => {
			this.escuelas = escs;
			//console.log(this.escuelas);
		});
	  this.dataService.listarProgramas().subscribe( progs => {
			this.programas = progs;
			//console.log(this.programas);
		});
		this.dataService.listarMallas().subscribe( mls => {
			this.mallas = mls;
			//console.log(this.mallas);
		});
		this.dataService.listarMaterias().subscribe( mats => {
			this.materias = mats;
			//console.log(this.materias);
		});
		this.dataService.listarCursos().subscribe( curs => {
			this.cursos = curs;
			//console.log(this.cursos);
		});
		this.dataService.listarGrupos().subscribe( grps => {
			this.grupos = grps;
			//console.log(this.grupos);
		});
		this.dataService.listarEstudiantes().subscribe( ests => {
			this.estudiantes = ests;
			//console.log(this.estudiantes);
		});
		this.dataService.listarProfesores().subscribe( profs => {
			this.profesores = profs;
			//console.log(this.profesores);
		});
	}
	
	eliminarInstitucion(id:any){
		var instituciones = this.instituciones;
		this.dataService.eliminarInstitucion(id).subscribe(data => {
			if(data.n==1){
				for(var i = 0; i<instituciones.length; i++){
					if(instituciones[i]._id == id){
						instituciones.splice(i,1);
					}
				}
			}
		})
	}
	
	eliminarEscuela(id:any){
		var escuelas = this.escuelas;
		this.dataService.eliminarEscuela(id).subscribe(data => {
			if(data.n==1){
				for(var i = 0; i<escuelas.length; i++){
					if(escuelas[i]._id == id){
						escuelas.splice(i,1);
					}
				}
			}
		})
	}

	eliminarPrograma(id:any){
		var programas = this.programas;
		this.dataService.eliminarPrograma(id).subscribe(data => {
			if(data.n==1){
				for(var i = 0; i<programas.length; i++){
					if(programas[i]._id == id){
						programas.splice(i,1);
					}
				}
			}
		})
	}

	eliminarMalla(id:any){
		var mallas = this.mallas;
		this.dataService.eliminarMalla(id).subscribe(data => {
			if(data.n==1){
				for(var i = 0; i<mallas.length; i++){
					if(mallas[i]._id == id){
						mallas.splice(i,1);
					}
				}
			}
		})
	}
	
	eliminarMateria(id:any){
		var materias = this.materias;
		this.dataService.eliminarMateria(id).subscribe(data => {
			if(data.n==1){
				for(var i = 0; i<materias.length; i++){
					if(materias[i]._id == id){
						materias.splice(i,1);
					}
				}
			}
		})
	}
	
	eliminarCurso(id:any){
		var cursos = this.cursos;
		this.dataService.eliminarCurso(id).subscribe(data => {
			if(data.n==1){
				for(var i = 0; i<cursos.length; i++){
					if(cursos[i]._id == id){
						cursos.splice(i,1);
					}
				}
			}
		})
	}
	
	eliminarGrupo(id:any){
		var grupos = this.grupos;
		this.dataService.eliminarGrupo(id).subscribe(data => {
			if(data.n==1){
				for(var i = 0; i<grupos.length; i++){
					if(grupos){
						grupos.splice(i,1);
					}
				}
			}
		})
	}
	
  ngOnInit() {
	  this.listarTodo();
  }

}
