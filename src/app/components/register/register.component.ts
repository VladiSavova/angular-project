import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
// 
export class RegisterComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder,
    private service: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      email: ['', [Validators.required ]],
     
    })
    console.log(this.form)
  }

  register() {
    this.service.register(this.form.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/login'])
    })
  }

  get f() {
    return this.form.controls;
  }

}
