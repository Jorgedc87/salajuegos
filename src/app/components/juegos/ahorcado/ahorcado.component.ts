import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  intentos: number = 0
  palabra: String = "LLAMADO"
  palabraEnConstruccion: String = "_______"
  letras: string[] = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W','X','Y','Z']

  constructor() { }

  ngOnInit(): void {
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
  }

    // if(this.palabra.includes(letra)){
    // }

}
