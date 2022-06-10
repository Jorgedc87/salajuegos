import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PptService {

  estadoJuego: string = 'Inactivo'
  seleccionIa: string = ''
  seleccionPj: string = ''
  rondas: number = 0
  scorePlayer: number = 0
  scoreIA: number = 0
  mensaje: string = ''


  constructor() { }

  cambiaEstadoJuego(estado: string){
    if(estado == 'Activo'){
      this.scoreIA = 0
      this.scorePlayer = 0
      this.mensaje = ''
      this.rondas = 0
    }
    this.estadoJuego = estado
  }

  juegaPlayer(seleccion: string){
    this.seleccionPj = seleccion
    this.logicaJuego()
  }

  logicaJuego(){
    this.convierteSeleccionIa(Math.floor(Math.random() * (1 - 4)) * -1);
    const jugadaRealizada = this.seleccionPj + this.seleccionIa
    // alert(jugadaRealizada)
    this.rondas++

      switch(jugadaRealizada){
        case 'piedratijeras':
        case 'tijeraspapel':
        case 'papelpiedra':
          // gana jugador
          this.mensaje = 'Ganaste. ' + this.seleccionPj[0].toUpperCase() + this.seleccionPj.slice(1) + ' vence ' + this.seleccionIa
          this.scorePlayer++
          break
        case 'piedrapapel':
        case 'tijeraspiedra':
        case 'papeltijeras':
          // gana cpu
          this.mensaje = 'Perdiste. ' + this.seleccionIa[0].toUpperCase() + this.seleccionIa.slice(1) + ' vence ' + this.seleccionPj
          this.scoreIA++
          break
        case 'piedrapiedra':
        case 'tijerastijeras':
        case 'papelpapel':
          // gana jugador
          this.mensaje = 'Empate. Ambos escogieron ' + this.seleccionPj
          break
      }

      if(this.condicionGanador()){
      }else{
        this.cambiaEstadoJuego('Finalizado')
        console.log('Hay ganador: ' + this.estadoJuego)

      }

  }

  condicionGanador(){
    if(this.scoreIA < 5){
      if(this.scorePlayer < 5){
        return true;
      }else{
        return false
      }
    }else{
      return false
    }
  }

  convierteSeleccionIa(seleccion: number){
    switch(seleccion){
      case 1:
        this.seleccionIa = 'piedra'
        break
      case 2:
        this.seleccionIa =  'papel'
        break
      case 3:
        this.seleccionIa =  'tijeras'
        break
    }
  }
}
