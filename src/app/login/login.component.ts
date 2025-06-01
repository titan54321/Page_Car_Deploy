import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formularioLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router // ✅ Ya funciona
  ) {
    this.formularioLogin = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  iniciarSesion() {
    const { usuario, contrasena } = this.formularioLogin.value;
    console.log('Usuario:', usuario);
    console.log('Contraseña:', contrasena);

    this.router.navigate(['/principal']);
  }

}
