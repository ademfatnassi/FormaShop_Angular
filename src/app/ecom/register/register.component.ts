import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registreForm: FormGroup;

  constructor(public fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registreForm = fb.group({
      firstname: new FormControl('', [
        Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')
      ]),
      lastname: new FormControl('', [
        Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')
      ]),
      phone: new FormControl('', [
        Validators.required, Validators.pattern('[0-9]*'),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')
      ]),
      repassword: new FormControl('', [
        Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')
      ])
    });
  }

  get firstname() { return this.registreForm.get('firstname'); }
  get lastname() { return this.registreForm.get('lastname'); }
  get phone() { return this.registreForm.get('phone'); }
  get email() { return this.registreForm.get('email'); }
  get password() { return this.registreForm.get('password'); }
  get repassword() { return this.registreForm.get('repassword'); }

  ngOnInit() {
    const islogged = this.userService.islogged();

    if (islogged) {
      this.router.navigate(['/']);
    }
  }

  register() {
    let data = this.registreForm.value;
    let user = new User(data.firstname, data.lastname, data.phone, data.email, data.password);

    this.userService.registerUser(user).subscribe(
      (result) => {
        this.router.navigate(['/']);
      },
      () => { }
    );
  }

}
