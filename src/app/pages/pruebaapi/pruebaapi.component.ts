import { Component, OnInit } from '@angular/core';
import { PruebaapiService } from 'src/app/services/pruebaapi.service';

@Component({
  selector: 'app-pruebaapi',
  templateUrl: './pruebaapi.component.html',
  styleUrls: ['./pruebaapi.component.scss']
})
export class PruebaapiComponent implements OnInit {
  respuesta

  constructor(public api: PruebaapiService) { }


  ngOnInit(): void {
  }

  enviar(){
    let datos = {
      nombre: 'Jorge',
      apellido: 'Calderon'
    }

    this.api.mostrarNombre(datos).subscribe(data => {
      this.respuesta = data
      // data.
      console.log(data)
    })
  }

}
