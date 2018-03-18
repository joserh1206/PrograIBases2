import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { Escuela } from '../escuela';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agregarmateria',
  templateUrl: './agregarmateria.component.html',
  styleUrls: ['./agregarmateria.component.css'],
  providers: [DataService]
})
export class AgregarmateriaComponent implements OnInit {
	
  escuelas: Escuela[];

  constructor(private dataService: DataService) { }

  listarEscuelas(){
	  this.dataService.listarEscuelas().subscribe( escs => {
		  this.escuelas = escs;
			  //console.log(this.escuelas);
	  });
  }

  crearMateria(form){
      let nuevaMateria: Materia = {
          materia: form.value.materia,
          codigo: form.value.codigo,
          idesc: form.value.idesc
      }
      this.dataService.crearMateria(nuevaMateria).subscribe(mat =>{
          console.log(mat);
      })
  }  

  
  ngOnInit() {
	  this.listarEscuelas();
  }

}
