import { Component, OnInit } from '@angular/core';
import { SuscripcionService } from 'src/app/services/suscripcion.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss']
})
export class SuscripcionComponent implements OnInit {

  listaPro: string[] = []
  listaPremium: string[] = []

  constructor(private paqueteService: SuscripcionService) { }

  ngOnInit(): void {
  }

  serMiembro(tipo: string){
    this.paqueteService.adhiereMiembro(tipo)
  }

  chequeo(){
    // this.paqueteService.autorizaMiembro()
  }

}
