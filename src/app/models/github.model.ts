export class Github{
    login: string
    avatar: string
    url: string
    nombre: string
    bio: string
    
    constructor(respuesta: any){
        this.login = respuesta['login']
        this.avatar = respuesta['avatar_url']
        this.url = respuesta['html_url']
        this.nombre = respuesta['name']
        this.bio = respuesta['bio']
    }
}