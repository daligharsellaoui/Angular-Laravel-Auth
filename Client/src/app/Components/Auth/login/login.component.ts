import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/Auth/auth.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  data: any;
  token: any;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router) { }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['dashboard'])
    }
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = false;
    if (this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value).subscribe(res => {
      this.data = res;
      if (this.data.status === 1) {
        this.token = this.data.data.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        });
      } else if (this.data.status === 0) {
        this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
        });
      }
    })
  }
}
