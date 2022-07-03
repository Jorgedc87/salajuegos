import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private firestore: Firestore) { }

  /*==================================
  Obtiene preguntas
  ==================================*/

  getPreguntas(): Observable<Pregunta[]>{
    // const triviaRef = collection(this.firestore, 'preguntas')
    const triviaRef = collection(this.firestore, 'preguntas')
    return collectionData(triviaRef, { idField: 'id'}) as Observable<Pregunta[]>
  }

  /*==================================
  Envia preguntas
  ==================================*/

  enviaPregunta(pregunta: Pregunta){
    const triviaRef = collection(this.firestore, 'preguntas')
    return addDoc(triviaRef, pregunta)
  }
}
