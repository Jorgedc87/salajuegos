import { Pipe, PipeTransform } from '@angular/core';
import ChatI from '../interfaces/chat';

@Pipe({
  name: 'msj'
})
export class MsjPipe implements PipeTransform {

  transform(mensaje: ChatI): string {
    return null;
  }

}
