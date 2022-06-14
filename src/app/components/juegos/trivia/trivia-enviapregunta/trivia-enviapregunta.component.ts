import { Component, OnInit } from '@angular/core';
import { Preguntas } from 'src/app/models/trivia/preguntas.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TriviaService } from 'src/app/services/trivia.service';
import { UsersService } from 'src/app/services/users.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Pregunta } from 'src/app/models/pregunta.model';

@Component({
  selector: 'app-trivia-enviapregunta',
  templateUrl: './trivia-enviapregunta.component.html',
  styleUrls: ['./trivia-enviapregunta.component.scss']
})
export class TriviaEnviapreguntaComponent implements OnInit {

  usuario: Usuario
  correcta
  respuestas = ['','','','',]
  pregunta: Pregunta = new Pregunta()

  constructor(   
    private triviaService: TriviaService,
    private userService: UsersService,
    private fb: FormBuilder) { }

    forma

  ngOnInit(): void {
    
    this.formReset()
    
  }

  enviaPregunta(){
    const form = this.fb.group({
      'categoria': [this.forma.value['categoria']],
      'correcta': [this.respuestas[0]],
      'dificultad': [0],
      'fecha': [new Date()],
      'nombre': [this.forma.value['nombre']],
      'pregunta': [this.forma.value['pregunta']],
      'respuestas': [[this.respuestas[0],this.respuestas[1],this.respuestas[2],this.respuestas[3]]],

    })
    this.triviaService.enviaPregunta(form.value)

    this.formReset()
    
  }

  formReset(){
    this.forma = this.fb.group({
      'pregunta': ['', [Validators.required, Validators.min(6), Validators.max(16)]],
      respuestas : this.fb.group({
        'respuesta1': ['', Validators.required],
        'respuesta2': ['', Validators.required],
        'respuesta3': ['', Validators.required],
        'respuesta4': ['', Validators.required]
      }),
      'categoria': ['', [Validators.required]],
      'nombre': ['', [Validators.required]]
    })
  }

}
