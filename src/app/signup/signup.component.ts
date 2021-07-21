import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { LoginComponent } from '../login/login.component';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  @ViewChild('passwordInput') passwordInput: ElementRef

  user: User = new User()
  confirmeSenha: string
  alert = AlertComponent
  cadastrado: boolean = false 
  login = LoginComponent 

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  validateInput() {
    if (this.user.name === undefined || this.user.name === '' || this.user.name.length < 3) {
      this.alert.setAlert('⚠️ Nome inválido', 'Insira um nome válido', 'agora')
      return false
    }
    if (this.user.email === undefined || this.user.email === '') {
      //FAZER VALIDAÇÃO DE EMAIL
      this.alert.setAlert('⚠️ Email inválido', 'Insira um email válido', 'agora')
      return false
    }
    if (this.user.zipCode === undefined || this.user.zipCode === '' || this.user.zipCode.length !== 9) {
      this.alert.setAlert('⚠️ Cep inválido', 'Insira um cep válido', 'agora')
      return false
    }
    if (this.user.phone === undefined || this.user.phone === '' || this.user.phone.length < 10 || this.user.phone.length > 11) {
      this.alert.setAlert('⚠️ Telefone inválido', 'Insira um telefone válido', 'agora')
      return false
    }
    if (this.user.address === undefined || this.user.address === '') {
      this.alert.setAlert('⚠️ Endereço inválido', 'Insira um endereço válido', 'agora')
      return false
    }
    if (this.user.password === undefined || this.user.password === '' || this.user.password.length < 8) {
      this.alert.setAlert('⚠️ Senha inválida', 'Insira uma senha com no mínimo 8 caracteres', 'agora')
      return false
    }
    return true
  }


  confirmarSenha(event: any) {
    this.confirmeSenha = event.target.value
  }

  newUser() {

    if (!this.validateInput()) return
    if (this.user.password != this.confirmeSenha) {
<<<<<<< HEAD
      this.alert.setAlert('⚠️ Atenção!', 'As senhas não correspodem.', 'agora', 5000)
    } else {
      this.authService.postUser(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/home'])
        this.alert.setAlert('😁 Sucesso!', `O usuário ${this.user.name} foi incluído no sistema!`, 'agora', 5000)
      }, () => this.alert.setAlert(`❌ Erro!`, `O email ${this.user.email}, já está cadastrado em nosso sistema.`, 'agora', 5000)
      
=======
      this.alert.setAlert('⚠️ Atenção', 'As senhas não correspodem.', 'agora', 3000)
    } else {
      this.authService.postUser(this.user).subscribe((resp: User) => {
        this.user = resp
        this.alert.setAlert('🎉 Bem vindo', `Sucesso ao cadastrar ${this.user.name} na Lifeshop!`, 'agora', 3000)
        this.user = new User()
        this.passwordInput.nativeElement.value = ''

      }, erro => {
        if(erro.status==400){
          this.alert.setAlert(`❌ Erro!`, `O email ${this.user.email}, já está cadastrado em nosso sistema.`, 'agora',3000)
        }
        if (erro.status==500){
          this.alert.setAlert('⚠️ Email inválido', 'Insira um email válido', 'agora',3000)
        }
      }
>>>>>>> 6c6cc3632c382633d19d8a69c453b5902670759c
      )
    }
  }

  voltar() {
    this.router.navigate(['/home'])
  }
}
