import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogged: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.isLogged = this.userService.islogged();
  }

  logout() {
    localStorage.removeItem('FormaLab');
    this.router.navigate(['/login']);
  }

}
