import { Component, OnInit } from '@angular/core';
import { Programa } from '../programa';
import { Materia } from '../materia';
import { Malla } from '../malla';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agregarmalla',
  templateUrl: './agregarmalla.component.html',
  styleUrls: ['./agregarmalla.component.css'],
  providers: [DataService]
})
export class AgregarmallaComponent implements OnInit {

  programas: Programa[];
  materias: Materia[];
  
  constructor(private dataService: DataService) { }
  
  listarProgramas(){
	  this.dataService.listarProgramas().subscribe( progs => {
		  this.programas = progs;
			  //console.log(this.programas);
	  });
  }

  listarMaterias(){
	  this.dataService.listarMaterias().subscribe( mats => {
		  this.materias = mats;
			  //console.log(this.programas);
	  });
  }
  
  crearMalla(form){
	  let nuevaMalla: Malla = {
          materias: form.value.materias;
		  numeroplan: form.value.numeroplan;
		  anho: form.value.anho;
		  codigoprogr: form.value.codigoprogr;
	  }
      this.dataService.crearMalla(nuevaMalla).subscribe(mall =>{
          console.log(malla);
      })	  
  }

  ngOnInit() {
	  this.listarProgramas();
	  this.listarMaterias();
  }

}
