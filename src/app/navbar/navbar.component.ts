import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User = new User
  autenticado = false

  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if((localStorage.getItem('token') || "") != '') {
      this.autenticado = true
    }
  }

  logar() {
    this.authService.logar(this.user).subscribe((resp: User) => {
      localStorage.setItem("token", resp.token)
      this.autenticado = true
    })
  }

}

