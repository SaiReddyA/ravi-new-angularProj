import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-eg',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-forms-eg.html',
  styleUrl: './reactive-forms-eg.css',
})
export class ReactiveFormsEg {

  userForm !:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.userForm =  this.fb.group({
      name1: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

  get name(){
    return this.userForm.get('name1') as FormControl;
  }

  get email(){
    return this.userForm.get('email') as FormControl;
  }

  get password(){
    return this.userForm.get('password') as FormControl;
  }

}
