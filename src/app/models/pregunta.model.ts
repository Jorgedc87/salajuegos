export class Pregunta{
    pregunta: string
    respuestas: string[]
    correcta: string
    categoria: string
    dificultad: number
    nombre: string
    fecha: Date

    constructor(){
        this.pregunta = ''
        this.respuestas = ['','','','']
        this.categoria = ''
        this.correcta = ''
        this.dificultad = 0
        this.nombre = ''
        this.fecha = new Date()
    }
}
