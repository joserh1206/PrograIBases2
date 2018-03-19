import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { DataService } from '../data.service';

@Component({
  selector: 'app-eliminarestudiante',
  templateUrl: './eliminarestudiante.component.html',
  styleUrls: ['./eliminarestudiante.component.css'],
  providers: [DataService]
})
export class EliminarestudianteComponent implements OnInit {

  estudiantes: Estudiante[];

  constructor(private dataService: DataService) { }

  listarEstudiantes(){
		this.dataService.listarEstudiantes().subscribe( ests => {
			this.estudiantes = ests;
			//console.log(this.estudiantes);
		});	  
  }
  
  eliminarEstudiante(id:any){
		var estudiantes = this.estudiantes;
		this.dataService.eliminarEstudiante(id).subscribe(data => {
			if(data.n==1){
				for(var i = 0; i<estudiantes.length; i++){
					if(estudiantes[i]._id == id){
						estudiantes.splice(i,1);
					}
				}
			}
		})
	}

  
  ngOnInit() {
	  this.listarEstudiantes();
  }

}
