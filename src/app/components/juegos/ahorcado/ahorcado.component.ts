import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  estado = 'Por iniciar'
  intentos: number = 0
  palabras: string[] = ['Llamado','Marginado','Juego','Ahorcado','Temeroso','Amistosa','Cuadrangular','Salvaje','Planteo','Payaso','Calendario','Caleidoscopio','Titanic','Personalizar','Mañanita','Gourmet','Felino','Murcielago' ,'Algoritmo' ,'Estructura' ,'Datos' ,'Datagrama' ,'Villavicencio' ,'Botella' ,'Mineral']
  palabra: String = "LLAMADO"
  palabraEnConstruccion: String = "_______"
  letras: string[] = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W','X','Y','Z']
  letrasUsadas: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.iniciarJuego()
  }

  compruebaLetra(letra: string){
    let temp = [...this.palabraEnConstruccion]
    for(let i = 0; i<this.palabra.length; i++){
      if(this.palabra[i]===letra){
        if(this.palabra.charAt(i) ==letra) { //Si la palabra elegida en el comboBox resulta que existe en el bucle, se ejecuta la acción
          temp[i] = letra; //sustituimos el valor de la posición del array temporal por la palabra elegida
          console.log(temp)
          this.palabraEnConstruccion = temp.join("")
       }
      }
    }
    this.letrasUsadas.push(letra)
    console.log(this.letrasUsadas)
    this.intentos++

    if(this.verificaVictoria()){
      this.estado = 'Finalizado'
    }

  }

  iniciarJuego(){

    let randomNumber = Math.floor(Math.random() * ( -1 - (this.palabras.length-1))) * -1
    randomNumber -= 1
    this.palabra = this.palabras[randomNumber].toUpperCase()
    let palabra = ""
    for(let i=0;i<this.palabra.length;i++){
      palabra+='_'
    }
    this.palabraEnConstruccion = palabra
    console.log(palabra)
  }

  verificaVictoria(){
    let victoria = 1
    for(let i = 0; i < this.palabraEnConstruccion.length; i++){
      if(this.palabraEnConstruccion[i] == '_'){
        victoria = 0
      }
      console.log(this.palabraEnConstruccion[i])
    }

    if(victoria==1){
      return true
    }else{
      return false
    }
  }

  reiniciaJuego(){
    this.letrasUsadas = []
    this.intentos=0
    this.estado = 'Jugando'
    this.iniciarJuego()
  }

    // if(this.palabra.includes(letra)){
    // }

}
