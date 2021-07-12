import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

declare var $: any

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  user: User = new User
  confirmeSenha: string
  alert = AlertComponent

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmarSenha(event: any){
    this.confirmeSenha = event.target.value
  }

  cadastrar(){
    if(this.user.password != this.confirmeSenha){
      alert('Atenção! As senhas não correspodem.')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.alert.setAlert('😁 Sucesso!', `O usuário ${this.user.name} foi incluído no sistema!`, 'agora', 3000)
        this.router.navigate(['/home'])
      })
    }
  }
  voltar() {
    this.router.navigate(['/home'])
  }
}
