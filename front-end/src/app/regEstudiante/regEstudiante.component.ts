import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { Institucion } from '../institucion';
import { DataService } from '../data.service';
//var mongoose = require('mongoose');

//mongoose.connect('mongo://localhost:27017');

@Component({
  selector: 'app-regestudiante',
  templateUrl: './regestudiante.component.html',
  styleUrls: ['./regestudiante.component.css'],
  providers: [DataService]
})
export class RegEstudianteComponent implements OnInit {
    
  instituciones: Institucion[];
    
  constructor(private dataService: DataService) {    }



  listarInstituciones(){	  
      //console.log(mongoose.model('instituciones').find());

      this.dataService.listarInstituciones().subscribe( insts => {
          this.instituciones = insts;
          console.log(insts);
          console.log(this.instituciones);
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
        console.log(this.instituciones);
  }

    
}
