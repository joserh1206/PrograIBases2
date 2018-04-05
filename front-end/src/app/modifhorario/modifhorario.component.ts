import { Component, OnInit } from '@angular/core';
import { Grupo } from '../grupo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-modifhorario',
  templateUrl: './modifhorario.component.html',
  styleUrls: ['./modifhorario.component.css'],
  providers: [DataService]
})
export class ModifhorarioComponent implements OnInit {

  grupos: Grupo[];
  grupoActual: Grupo;
  
  constructor(private dataService: DataService) { }
  
  listarGrupos(){
      this.dataService.listarGrupos().subscribe( grps => {
          this.grupos = grps;
          //console.log(this.grupos);
	  });	
  }
  
  modificarHorario(form){
	  for (var i = 0; i < this.grupos.length; i++){
		  if (form.value.idgrupo == this.grupos[i]._id){
			  this.grupoActual = this.grupos[i];
		  }
      }
      let grupoHorario: Grupo = {
		  _id: this.grupoActual._id,
		  idcurso: this.grupoActual.idcurso,
		  numerogrupo: this.grupoActual.numerogrupo,
		  codigoprofe: this.grupoActual.codigoprofe,
		  horario: form.value.horario,
		  estudiantes: this.grupoActual.estudiantes
      }
      this.dataService.actualizarGrupo(grupoHorario).subscribe(grp =>{
          console.log(grp);
		  this.listarGrupos();
      })	  
  }
  
  ngOnInit() {
	  this.listarGrupos();
  }

}
