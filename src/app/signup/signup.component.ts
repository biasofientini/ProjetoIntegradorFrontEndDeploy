import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User
  confirmeSenha: string

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

    if(this.user.senha != this.confirmeSenha){
      alert('Atenção! As senhas não correspodem.')
    } else {

      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }
}
