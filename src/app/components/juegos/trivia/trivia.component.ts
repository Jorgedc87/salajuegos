import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Preguntas } from 'src/app/models/trivia/preguntas.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TriviaService } from 'src/app/services/trivia.service';
import { Pregunta } from 'src/app/models/pregunta.model';
import { interval, timer } from 'rxjs';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {
  preguntaElegida: any = []
  puntos
  cantidad
  preguntas
  estadoJuego = 'Jugando'
  tiempoDeJuego = 0
  config: CountdownConfig = {}
  notify = '';
  progress

  constructor(
    private triviaService: TriviaService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.nuevoJuego() 
  }

  nuevoJuego(){
    this.config = { 
      leftTime: 10, notify: [10, 9,8,7,6,5,4,3,2,1],
      formatDate: ({ date }) => `${date / 1000}` 
    }
    this.tiempoDeJuego = 0
    this.puntos = 0
    this.cantidad = 0
    this.preguntaElegida = []
    this.estadoJuego = 'Jugando'
    this.triviaService.getPreguntas().subscribe(resp =>{
      this.preguntas = resp
      this.cambiaPregunta()
    })
  }

  cambiaPregunta(){
    let randomNumber = Math.floor(Math.random() * ( 0 - this.preguntas.length)) * -1
    for(let pregunta of this.preguntas){ // SELECT * FROM PREGUNTAS
      
      if(this.preguntas.indexOf(pregunta)+1 == randomNumber){
        this.preguntaElegida = pregunta
        this.preguntaElegida.respuestas = this.shuffleArray(this.preguntaElegida.respuestas)
        this.preguntas.splice(this.preguntas.indexOf(pregunta),1)
        // console.log(this.preguntas)
        this.cantidad++
      }else{
        // console.log("Random: ", randomNumber, " && Pregunta: ", this.preguntas.indexOf(pregunta)+1)
      }
    }

  }

  puntoObtenido(respuesta: number){
    if(this.preguntaElegida.correcta === respuesta){
      this.puntos++
      if(this.preguntas.length > 0){
        this.cambiaPregunta()
      }else{
        this.estadoJuego = 'Finalizado'
        this.config = {}
      }
    }else{
      this.estadoJuego = 'Finalizado'
      this.config = {}
    }

    
  }

  shuffleArray(array: []) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
  }

  handleEvent(e: CountdownEvent) {
    this.notify = e.action.toUpperCase();
    // console.log(this.tiempoDeJuego)
    if (e.action === 'notify') {
      this.notify += ` - ${e.left} ms`;
      this.tiempoDeJuego += 1
      
    }
    if(e.status === 3){
      this.estadoJuego = 'Finalizado'
    }
    // console.log('Quedan ', e.left/1000 , ' segundos');
  }

}

// {"id":"1","pregunta":" La capital de Brasil es ...","respuestas":["Nueva York ","Brasilia ","México ","Sofía "],"contestacion":[" Incorrecto."," Correcto!"," Incorrecto."," Incorrecto."],"correcta":1},
// {"id":"2","pregunta":" La capital de Bulgaria es...","respuestas":["Sofía ","Ottawa ","México ","Roma"],"contestacion":[" Correcto!"," Incorrecto."," Incorrecto."," Incorrecto."],"correcta":0},
// {"id":"3","pregunta":" La capital de Camerún es...","respuestas":["Sofía ","Ottawa ","Rio de Janeiro ","Yaundé "],"contestacion":[" Incorrecto."," Incorrecto."," Incorrecto."," Correcto!"],"correcta":3},
// {"id":"4","pregunta":" La capital de Canadá es...","respuestas":["Ottawa ","Sofía ","México ","Madrid "],"contestacion":[" Correcto!"," Incorrecto."," Incorrecto."," Incorrecto."],"correcta":0},
// {"id":"5","pregunta":" La capital de Chile es...","respuestas":["Londres ","Sofía ","Santiago ","Madrid "],"contestacion":[" Incorrecto."," Incorrecto."," Correcto!"," Incorrecto."],"correcta":2},
// {"id":"6","pregunta":" La capital de Colombia es...","respuestas":["Santiago ","Bogotá ","Londres ","Roma "],"contestacion":[" Incorrecto."," Correcto!"," Incorrecto."," Incorrecto."],"correcta":1},
// {"id":"7","pregunta":" La capital del Congo es...","respuestas":["Nueva York ","Bogotá ","Madrid ","Kinshasa "],"contestacion":[" Incorrecto."," Incorrecto."," Incorrecto."," Correcto!"],"correcta":3},
// {"id":"8","pregunta":" La capital de Corea del sur es...","respuestas":["Seúl ","Bogotá ","Paris ","Bogotá "],"contestacion":[" Correcto!"," Incorrecto."," Incorrecto."," Incorrecto."],"correcta":0},
// {"id":"9","pregunta":" La capital de Costa de Marfil es...","respuestas":["Yamusukro ","Viena ","León ","Praga "],"contestacion":[" Correcto!"," Incorrecto."," Incorrecto."," Incorrecto."],"correcta":0}