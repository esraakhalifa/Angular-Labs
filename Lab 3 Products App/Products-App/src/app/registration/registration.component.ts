import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {confirmPasswordValidator} from './validators';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  constructor(){
    this.registrationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      userName : new FormControl('', [Validators.required, Validators.pattern(/^\S+$/)] ),
      userPassword: new FormControl('', [
        Validators.required, 
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/)
      ]),
      confirmPassword: new FormControl('',Validators.required)})
      
    }
    // { validators: confirmPasswordValidator() }
    onSubmit(): void{

      console.log(this.registrationForm.controls);
    }
    get formControls()
    {
      return this.registrationForm.controls;
    }

  }







