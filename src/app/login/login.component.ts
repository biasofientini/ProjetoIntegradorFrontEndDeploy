import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('passwordInput') passwordInput: ElementRef

  user: User = new User
  alert = AlertComponent

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  validateInput() {
    if (this.user.email === undefined || this.user.email === '') {
      //FAZER VALIDAÇÃO DE EMAIL
      this.alert.setAlert('⚠️ Email inválido', 'Digite seu email.', 'agora')
      return false
    }
    if (this.user.password === undefined || this.user.password === '' || this.user.password.length < 8) {
      this.alert.setAlert('⚠️ Senha inválida', 'Digite sua senha.', 'agora')
      return false
    }
    return true
  }


  logar() {
    if(!this.validateInput()) return
    this.authService.logar(this.user).subscribe((resp: User) => {
      localStorage.setItem("token", resp.token)
      localStorage.setItem("idUser", resp.id.toString())
      localStorage.setItem("idRole", resp.idRole.toString())
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/home']);
    }, () => this.alert.setAlert(`❌ Erro!`, `Email ou senha não correspondem, tente logar novamente.`, 'agora', 3000)
    )
    this.user.password = ''
  }

}
