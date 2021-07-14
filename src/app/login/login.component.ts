import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User
  alert = AlertComponent

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  logar() {
    this.authService.logar(this.user).subscribe((resp: User) => {
      localStorage.setItem("token", resp.token)
      localStorage.setItem("idUser", resp.id.toString())
      localStorage.setItem("idRole", resp.idRole.toString())
      this.router.navigate(['/home'])
      window.location.reload()
    })
  }

}
