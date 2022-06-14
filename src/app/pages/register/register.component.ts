import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public forma: FormGroup
  usuario = new Usuario()
  passwordRepeat = ''
  error = ''
  fecha: Date

  constructor(
    private authService: AuthService,
    private usuarioService: UsersService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.forma = this.fb.group({
      'contraseña': ['', [Validators.required, Validators.min(6), Validators.max(16)]],
      'email': ['', [Validators.required, Validators.email]],
      'nombre': ['', Validators.required],
      'contraseña2': ['', [Validators.required, Validators.min(6), Validators.max(16)]]
    });

  }

  async aceptar() {

    if(this.forma.value['contraseña'] === this.forma.value['contraseña2']){
      this.forma.removeControl('contraseña2')
      this.forma.addControl('fechaCreacion', new FormControl(this.fecha = new Date ()))
      await this.usuarioService.addUser(this.forma.value)
      this.usuario.mail = this.forma.value['email']
      this.usuario.nombre = this.forma.value['nombre']
      this.usuario.contrasena = this.forma.value['contraseña']

      this.authService.register(this.usuario).then(res =>{
        console.log('Registrado')
        this.route.navigate(['inicio'])
      }).catch(error => {
        switch(error.code){
        case 'auth/email-already-in-use':
        this.error = 'El correo ya existe'

        break;
      }
      })
    }else{
          this.error = 'Las contraseñas no coinciden'
        }
  }

  registro(){

    if(this.forma.value['contraseña'] === this.forma.value['contraseña2']){
      this.usuario.mail = this.forma.value['email']
      this.usuario.contrasena = this.forma.value['contraseña']
      this.authService.register(this.usuario).then(res =>{
        // this.route.navigate(['inicio'])
      }).catch(error => {
        console.log(error)
      })
      // const respuesta = this.usuarioService.guardaUsuario(this.usuario)

    }else{
      this.error = 'Las contraseñas no coinciden'
    }
  }

}
