import { Component, OnInit } from '@angular/core';
import { Escuela } from '../escuela';
import { Programa } from '../programa';
import { DataService } from '../data.service';

@Component({
  selector: 'app-agregarprograma',
  templateUrl: './agregarprograma.component.html',
  styleUrls: ['./agregarprograma.component.css'],
  providers: [DataService]
})
export class AgregarprogramaComponent implements OnInit {

  escuelas: Escuela[];

  constructor(private dataService: DataService) { }

  	listarEscuelas(){
		this.dataService.listarEscuelas().subscribe( escs => {
			this.escuelas = escs;
			//console.log(this.escuelas);
		});
	}
	
	crearPrograma(form){
      let nuevoPrograma: Programa = {
          programaa: form.value.programaa,
          codigoesc: form.value.codigoesc
      }
      this.dataService.crearPrograma(nuevoPrograma).subscribe(prog =>{
          console.log(prog);
      })
  }  

	
  
  ngOnInit() {
	  this.listarEscuelas();
  }

}
