import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  enviarFormulario() {
    console.log('Datos del contacto:', this.contactoForm.value);
    alert('¡Gracias por tu mensaje!');
    this.contactoForm.reset();
  }
}
