export class Jugador{
    mail: string
    victorias: number
    derrotas: number
    puntosGanados: number
    puntosPerdidos: number
    porcentaje: string
    juego: string

    constructor(){
        this.mail = ''
        this.victorias = 0
        this.derrotas = 0
        this.puntosGanados = 0
        this.puntosPerdidos = 0
        this.porcentaje = ''
        this.juego = ''
    }
}
