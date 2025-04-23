import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  fb = inject(FormBuilder)
  hasError = signal(false)
  isPosting =signal(false)
  router = inject(Router)

  authService = inject(AuthService);
  registerForm = this.fb.group({
    nombre: ['',[Validators.required, ]],
    apellido: ['',[Validators.required, ]],
    nick: ['',[Validators.required, ]],
    email: ['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]],
  })

  onSubmit(){
    if(this.registerForm.invalid){
      this.hasError.set(true);
      setTimeout(()=>{
        this.hasError.set(false);
      },2000);
      return;
    }
    const {nombre='',apellido='',nick='', email= '',password =''}= this.registerForm.value;

  }
}
