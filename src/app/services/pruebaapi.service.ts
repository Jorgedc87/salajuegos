import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaapiService {

  constructor(public http: HttpClient) { }

    datos = ['Jorge','Calderon']
    url = '/api/proxy/identificador/'

    mostrarNombre(data){
      return this.http.post(this.url, JSON.stringify(this.datos));
    }
}
