import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Preguntas } from 'src/app/models/trivia/preguntas.model';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {
  preguntaElegida
  preguntasJugadas: Preguntas[]
  puntos = 0
  preguntas = [
    {"id":"1","pregunta":" La capital de Brasil es ...","respuestas":["Nueva York ","Brasilia ","México ","Sofía "],"contestacion":[" Incorrecto."," Correcto!"," Incorrecto."," Incorrecto."],"correcta":1},
{"id":"2","pregunta":" La capital de Bulgaria es...","respuestas":["Sofía ","Ottawa ","México ","Sofía "],"contestacion":[" Correcto!"," Incorrecto."," Incorrecto."," Incorrecto."],"correcta":0},
{"id":"3","pregunta":" La capital de Camerún es...","respuestas":["Sofía ","Ottawa ","Rio de Janeiro ","Yaundé "],"contestacion":[" Incorrecto."," Incorrecto."," Incorrecto."," Correcto!"],"correcta":3},
{"id":"4","pregunta":" La capital de Canadá es...","respuestas":["Ottawa ","Sofía ","México ","Madrid "],"contestacion":[" Correcto!"," Incorrecto."," Incorrecto."," Incorrecto."],"correcta":0},
{"id":"5","pregunta":" La capital de Chile es...","respuestas":["Londres ","Sofía ","Santiago ","Madrid "],"contestacion":[" Incorrecto."," Incorrecto."," Correcto!"," Incorrecto."],"correcta":2},
{"id":"6","pregunta":" La capital de Colombia es...","respuestas":["Santiago ","Bogotá ","Londres ","Roma "],"contestacion":[" Incorrecto."," Correcto!"," Incorrecto."," Incorrecto."],"correcta":1},
{"id":"7","pregunta":" La capital del Congo es...","respuestas":["Nueva York ","Bogotá ","Madrid ","Kinshasa "],"contestacion":[" Incorrecto."," Incorrecto."," Incorrecto."," Correcto!"],"correcta":3},
{"id":"8","pregunta":" La capital de Corea del sur es...","respuestas":["Seúl ","Bogotá ","Paris ","Bogotá "],"contestacion":[" Correcto!"," Incorrecto."," Incorrecto."," Incorrecto."],"correcta":0},
{"id":"9","pregunta":" La capital de Costa de Marfil es...","respuestas":["Yamusukro ","Viena ","León ","Praga "],"contestacion":[" Correcto!"," Incorrecto."," Incorrecto."," Incorrecto."],"correcta":0}
  ]

  constructor() { }

  ngOnInit(): void {
    this.cambiaPregunta()
  }

  cambiaPregunta(){
    let randomNumber = Math.floor(Math.random() * (1 - 10)) * -1
    let random = randomNumber.toString()
    for(let pregunta of this.preguntas){
      if(pregunta.id == random){
        this.preguntaElegida = pregunta
        if(this.preguntasJugadas.includes(this.preguntaElegida)){

        }
      }
    }
    this.preguntasJugadas.push()
  }

  puntoObtenido(respuesta: number){
    if(this.preguntaElegida.correcta === respuesta){
      this.puntos++
    }


    console.log(respuesta)

    this.cambiaPregunta()
  }

}
