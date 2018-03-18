import { Component, OnInit } from '@angular/core';
import { Institucion } from '../institucion';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crearinstituciones',
  templateUrl: './crearinstituciones.component.html',
  styleUrls: ['./crearinstituciones.component.css'],
  providers: [DataService]
})
export class CrearinstitucionesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  crearInstitucion(form){
      let nuevaInstitucion: Institucion = {
          institucion: form.value.institucion,
          pais: form.value.pais,
          sede: form.value.sede
      }
      this.dataService.crearInstitucion(nuevaInstitucion).subscribe(inst =>{
          console.log(inst);
      })
  }
  
  ngOnInit() {
  }

}
