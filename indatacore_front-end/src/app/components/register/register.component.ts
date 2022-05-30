import { SpaceValidator } from './../../model/space-validator';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../service/security/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroupRegister: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.formRegister();
  }

  formRegister(){
    this.formGroupRegister = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        SpaceValidator.onlyContainSpace,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password: new FormControl('', [
        Validators.required,
        SpaceValidator.onlyContainSpace,
        Validators.minLength(4),
      ])
    });
  }
  get name(){
    return this.formGroupRegister.get('name');
  }
  get email(){
    return this.formGroupRegister.get('email');
  }
  get password(){
    return this.formGroupRegister.get('password');
  }

  register(){
    if(this.formGroupRegister.invalid){
      this.formGroupRegister.markAllAsTouched();
    }else{
      this.auth.addUser(this.name.value, this.email.value, this.password.value).subscribe({
        next: data => {
          this.router.navigate(['/signup']);
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

}
