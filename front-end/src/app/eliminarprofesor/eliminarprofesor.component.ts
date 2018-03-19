import { Component, OnInit } from '@angular/core';
import { Profesor } from '../profesor';
import { DataService } from '../data.service';

@Component({
  selector: 'app-eliminarprofesor',
  templateUrl: './eliminarprofesor.component.html',
  styleUrls: ['./eliminarprofesor.component.css'],
  providers: [DataService]
})
export class EliminarprofesorComponent implements OnInit {

  profesores: Profesor[];

  constructor(private dataService: DataService) { }

  listarProfesores(){
		this.dataService.listarProfesores().subscribe( profs => {
			this.profesores = profs;
			//console.log(this.profesores);
		});	  
  }
  
  eliminarProfesor(id:any){
		var profesores = this.profesores;
		this.dataService.eliminarProfesor(id).subscribe(data => {
			if(data.n==1){
				for(var i = 0; i<profesores.length; i++){
					if(profesores[i]._id == id){
						profesores.splice(i,1);
					}
				}
			}
		})
	}  
  
  ngOnInit() {
	  this.listarProfesores();
  }

}
