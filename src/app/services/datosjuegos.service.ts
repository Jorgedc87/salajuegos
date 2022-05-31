import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { Subject } from 'rxjs';
import { firebase } from '../../environments/firebase';
import { Jugador } from '../models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class DatosjuegosService {
  db: Firestore
  jugadorData: CollectionReference<DocumentData>;
  url='https://saladejuegostv-default-rtdb.firebaseio.com/'
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(firebase);
    this.db = getFirestore();
    this.jugadorData = collection(this.db, 'students');

    // Get Realtime Data
    onSnapshot(this.jugadorData, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
   }

   async traeJugador() {
    const snapshot = await getDocs(this.jugadorData);
    return snapshot;
  }


  async agregaJugador(jugador: Jugador) {
    await addDoc(this.jugadorData, {
      jugador
    })
    return;
  }

  async borraJugador(docId: string) {
    const docRef = doc(this.db, 'students', docId)
    await deleteDoc(docRef);
    return;
  }

  async updateJugador(docId: string, name: string, age: string) {
    const docRef = doc(this.db, 'students', docId);
    await updateDoc(docRef, { name, age })
    return;
  }
}
