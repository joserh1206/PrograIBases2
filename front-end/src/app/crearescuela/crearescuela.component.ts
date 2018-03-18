import { Component, OnInit } from '@angular/core';
import { Escuela } from '../escuela';
import { Institucion } from '../institucion';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crearescuela',
  templateUrl: './crearescuela.component.html',
  styleUrls: ['./crearescuela.component.css'],
  providers: [DataService]
})
export class CrearescuelaComponent implements OnInit {

  instituciones: Institucion[];

  constructor(private dataService: DataService) { }

  listarInstituciones(){
      this.dataService.listarInstituciones().subscribe( insts => {
          this.instituciones = insts;
          //console.log(this.instituciones);
	  });
	}

  crearEscuela(form){
	  let nuevaEscuela: Escuela = {
		  escuela: form.value.escuela,
		  codigoinst: form.value.codigoinst
	  }
	  this.dataService.crearEscuela(nuevaEscuela).subscribe(esc =>{
          console.log(esc);
      })
  }
  
  
  ngOnInit() {
	  this.listarInstituciones();
  }

}
