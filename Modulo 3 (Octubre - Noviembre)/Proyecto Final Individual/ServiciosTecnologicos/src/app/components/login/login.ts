import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService, Usuario } from '../../services/login-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  loading: boolean = false;
  error: string = '';
  mensajeExito: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.error = 'Por favor, completa todos los campos correctamente.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.mensajeExito = '';

    const { email, password } = this.loginForm.value;

    this.loginService.validarCredenciales(email, password).subscribe({
      next: (usuario: Usuario | null) => {
        this.loading = false;
        if (usuario) {
          this.mensajeExito = `Bienvenido, ${usuario.nombre || usuario.email}`;
          // Guardar sesión o redirigir
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1500);
        } else {
          this.error = 'Credenciales incorrectas. Verifica tu email y contraseña.';
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Error al conectar con el servidor.';
        console.error(err);
      }
    });
  }
}