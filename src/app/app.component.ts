import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { SuscripcionService } from './services/suscripcion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SalaDeJuegos';

  constructor(private suscriptionService: SuscripcionService){

  }

  onActivate(event:any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });

  }

  ngOnInit(): void {
    this.suscriptionService.cargaPaquetes()
  }
}
