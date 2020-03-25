import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './log-in.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.loginForm.valid || this.loginForm.pending) {
      Swal.fire('Fill the required fields', '', 'error');
      return;
    }

    const formValues = this.loginForm.getRawValue();
    this.loginService.login(formValues).subscribe(res => {
      if (res) {
        this.router.navigate(['kars']);
      }
    });
  }
}
