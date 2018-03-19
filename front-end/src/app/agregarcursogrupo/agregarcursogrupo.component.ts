import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { Grupo } from '../grupo';
import { Materia } from '../materia';
import { Profesor } from '../profesor';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agregarcursogrupo',
  templateUrl: './agregarcursogrupo.component.html',
  styleUrls: ['./agregarcursogrupo.component.css'],
  providers: [DataService]
})
export class AgregarcursogrupoComponent implements OnInit {

  profesores: Profesor[];
  materias: Materia[];
  cursos: Curso[];

  constructor(private dataService: DataService) { }
  
  listarMaterias(){
	  this.dataService.listarMaterias().subscribe( mats => {
		  this.materias = mats;
		  //console.log(this.materias);
	  });
  }

  listarProfesores(){
	  this.dataService.listarProfesores().subscribe( profs => {
		  this.profesores = profs;
		  //console.log(this.profesores);
	  });	  
  }

  listarCursos(){
	  this.dataService.listarCursos().subscribe( curs => {
		  this.cursos = curs;
		  //console.log(this.cursos);
	  })
  }
  
  crearCurso(form){
	  let nuevoCurso: Curso = {
          semestre: form.value.semestre,
          anho: form.value.anho,
          codigomateria: form.value.codigomateria,
		  grupos: [-1]
      }
      this.dataService.crearCurso(nuevoCurso).subscribe(cur =>{
          console.log(cur);
      })
  }
  
  crearGrupo(form){
      let nuevoGrupo: Grupo = {
          idcurso: form.value.idcurso,
          numerogrupo: form.value.numerogrupo,
          codigoprofe: form.value.codigoprofe,
		  horario: "",
		  estudiantes: [-1]
      }
      this.dataService.crearGrupo(nuevoGrupo).subscribe(grp =>{
          console.log(grp);
      })	  
  }

  ngOnInit() {
	  this.listarMaterias();
	  this.listarProfesores();
	  this.listarCursos();
  }

}
