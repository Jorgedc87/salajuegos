import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Subject } from 'rxjs';
import { firebase } from '../../environments/firebase';
import { Jugador } from '../models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class DatosjuegosService {
  jugadorData: CollectionReference<DocumentData>;
  url='https://saladejuegostv-default-rtdb.firebaseio.com/'
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor(
    private db: Firestore,
    private angularFirestore: AngularFirestore
  ) {
    initializeApp(firebase);
    this.db = getFirestore();
    this.jugadorData = collection(this.db, 'students');
  }

  // Metodos

  // GET SCORES
  getScores(juego: string){
    return this.angularFirestore
    .collection('scores-' + juego)
    .snapshotChanges()
  }

  // SET GAME
  setScores(juego: Jugador){
    return new Promise<any>( ( resolve, reject) =>{
      this.angularFirestore
      .collection(juego.juego)
      .add({
        juego: juego.juego,
        victorias: juego.victorias,
        derrotas: juego.derrotas,
        mail: juego.mail
      })
      .then(response => {
        console.log(response)
      })
    })
  }
}
