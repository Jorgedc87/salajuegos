export class Chat {
    fecha: Date
    usuario: string
    texto: string

    constructor(){
      this.fecha = new Date();
      this.usuario = ''
      this.texto = ''
    }
}
