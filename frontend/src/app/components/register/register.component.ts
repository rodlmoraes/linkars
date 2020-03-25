import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RegisterService } from './register.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private registerService: RegisterService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {

    if (!this.registerForm.valid || this.registerForm.pending) {
      Swal.fire('Fill the required fields', '', 'error');
      return;
    }

    const formValues = this.registerForm.getRawValue();

    this.registerService.register(formValues).subscribe(res => {
      if (res) {
        Swal.fire('You are registered', '', 'success');
        this.router.navigate(['kars']);
      }
    });
  }

}
