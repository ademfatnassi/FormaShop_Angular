import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = fb.group({
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]*$')
      ])
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit() {
    let islogged = this.userService.islogged();

    if (islogged) {
      this.router.navigate(['/']);
    }
  }

  login() {
    let data = this.loginForm.value;
    let user = new User(null, null, null, data.email, data.password);
    console.log(user);

    this.userService.connexionUser(user).subscribe(
      (result) => {
        //this.toastr.success('Connexion effectuée');

        let token = result.token;
        localStorage.setItem('FormaLab', token);

        let helper = new JwtHelperService();
        let decodedToken = helper.decodeToken(token);

        console.log(decodedToken.role);

        if (decodedToken.role === 'user') {
          this.router.navigate(['./']);
        } else {
          this.router.navigate(['./admin/dashboard']);
        }


      },
      (error) => {
        console.log(error.error);

        //this.toastr.error(error.error.message);
      }
    );
  }

}
