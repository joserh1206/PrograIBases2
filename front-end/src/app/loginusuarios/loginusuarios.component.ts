import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { Profesor } from '../profesor';
import { DataService } from '../data.service';

@Component({
  selector: 'app-loginusuarios',
  templateUrl: './loginusuarios.component.html',
  styleUrls: ['./loginusuarios.component.css'],
  providers: [DataService]
})
export class LoginusuariosComponent implements OnInit {

  constructor(private dataService: DataService) { }

    estudiantes: Estudiante[];
    profesores: Profesor[];

    listarEstudiantes(){
      this.dataService.listarEstudiantes().subscribe( ests => {
          this.estudiantes = ests;
          //console.log(this.estudiantes);
	  });
	}
	
	listarProfesores(){
		this.dataService.listarProfesores().subscribe( profs => {
			this.profesores = profs;
			//console.log(this.profesores);
		});
	}

  
  ngOnInit() {
	  this.listarEstudiantes();
	  this.listarProfesores();
  }

}
