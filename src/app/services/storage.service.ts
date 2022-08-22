import { Injectable } from '@angular/core';
import { collection, doc, Firestore, getDoc, getDocs } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public firestoreApp;
  constructor() {
    this.firestoreApp = initializeApp(environment.firebase);
   }

   traerColeccion():Promise<any>{
     const a = collection(this.firestoreApp, 'Juegos');

   }


}
