import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { Institucion } from '../institucion';
import { Escuela } from '../escuela';
import { Programa } from '../programa';
import { DataService } from '../data.service';

@Component({
  selector: 'app-regestudiantes',
  templateUrl: './regestudiantes.component.html',
  styleUrls: ['./regestudiantes.component.css'],
  providers: [DataService]
})
export class RegestudiantesComponent implements OnInit {

  instituciones: Institucion[];
  escuelas: Escuela[];
  programas: Programa[];
  
  constructor(private dataService: DataService) {  }
  
    listarInstituciones(){
      this.dataService.listarInstituciones().subscribe( insts => {
          this.instituciones = insts;
          //console.log(this.instituciones);
	  });
	}
	
	listarEscuelas(){
		this.dataService.listarEscuelas().subscribe( escs => {
			this.escuelas = escs;
			//console.log(this.escuelas);
		});
	}
  
	listarProgramas(){
		this.dataService.listarProgramas().subscribe( progs => {
			this.programas = progs;
			//console.log(this.programas);
		});
	}

	registrarEstudiante(form){
      let nuevoEstudiante: Estudiante = {
          nombre: form.value.nombre,
          carnet: form.value.carnet,
          idInst: form.value.idInst,
          idEsc: form.value.idEsc,
          idProgA: form.value.idProgA,
          password: form.value.password
      }
      this.dataService.registrarEstudiante(nuevoEstudiante).subscribe(est =>{
          console.log(est);
      })
  }  

  ngOnInit() {
	this.listarInstituciones();
	this.listarEscuelas();
	this.listarProgramas();
  }

}
