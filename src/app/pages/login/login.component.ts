import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public forma!: FormGroup
  usuario = new Usuario()
  error = ''


  constructor(
    private authService: AuthService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'contraseña': ['', [Validators.required, Validators.min(6), Validators.max(16)]],
      'email': ['', [Validators.required, Validators.email]]
    });
  }

  ingresar(){
    if(this.usuario.mail != '' && this.usuario.contrasena != ''){
      this.authService.login(this.usuario).then(res =>{
        this.route.navigate(['inicio'])
        this.error = ''
      })
    }else{
      this.error = 'Complete todos los datos'
    }
  }

  ingresarConGoogle(){
      this.authService.loginWithGoogle(this.usuario).then(res =>{
        this.route.navigate(['inicio'])
        this.error = ''
      })

  }

}
