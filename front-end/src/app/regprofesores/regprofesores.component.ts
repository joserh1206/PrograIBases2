import { Component, OnInit } from '@angular/core';
import { Profesor } from '../profesor';
import { Institucion } from '../institucion';
import { Escuela } from '../escuela';
import { DataService } from '../data.service';

@Component({
  selector: 'app-regprofesores',
  templateUrl: './regprofesores.component.html',
  styleUrls: ['./regprofesores.component.css'],
  providers: [DataService]
})

export class RegprofesoresComponent implements OnInit {

  instituciones: Institucion[];
  escuelas: Escuela[];

  constructor(private dataService: DataService) { }

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
  
  registrarProfesor(form){
      let nuevoProfesor: Profesor = {
          profesor: form.value.profesor,
          carnetprof: form.value.carnetprof,
          codigoinst: form.value.codigoinst,
          codigoesc: form.value.codigoesc,
          password: form.value.password
      }
      this.dataService.registrarProfesor(nuevoProfesor).subscribe(prof =>{
          console.log(prof);
      })
  }  
  
  ngOnInit() {
	this.listarInstituciones();
	this.listarEscuelas();
  }

}
