import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild('passwordInput') passwordInput: ElementRef

  user: User = new User()
  alert = AlertComponent
  confirmeSenha: string

  constructor(
    private router: Router,
    private authUserService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getUserProfile()
  }

  getUserProfile() {
    this.authUserService.getById(Number(localStorage.getItem("idUser") || "")).subscribe((resp: User) => {
      this.user.email = resp.email
      this.user.name = resp.name
      this.user.points = resp.points
      this.user.phone = resp.phone
      this.user.zipCode = resp.zipCode
      this.user.address = resp.address
      this.user.password = ''
    })
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



  updateUser() {
<<<<<<< HEAD
<<<<<<< HEAD
    this.authUserService.putUser(this.user, +(localStorage.getItem("idUser") || "")).subscribe((resp: User) => {
      this.alert.setAlert('🎉 Tudo certo', `Informações atualizadas com sucesso! ${this.user.name}`, 'agora', 3000)
      this.authService.logar(this.user).subscribe((resp: User) => {
        localStorage.setItem("token", resp.token)
        localStorage.setItem("idUser", resp.id.toString())
        localStorage.setItem("idRole", resp.idRole.toString())
        this.getUserProfile()
      })
    })
=======
    if(!this.validateInput()) return
    if (this.user.password !=  this.passwordInput.nativeElement.value){
      this.alert.setAlert('⚠️ Atenção!', 'As senhas não correspodem.', 'agora', 3000)
      this.getUserProfile()
      this.passwordInput.nativeElement.value = ''
    } else{
      this.authUserService.putUser(this.user, +(localStorage.getItem("idUser") || "")).subscribe((resp: User) => {
        this.alert.setAlert('🎉 Tudo certo', `Informações atualizadas com sucesso! ${this.user.name}`, 'agora', 3000)
        this.authService.logar(this.user).subscribe((resp: User) => {
          localStorage.setItem("token", resp.token)
          localStorage.setItem("idUser", resp.id.toString())
          localStorage.setItem("idRole", resp.idRole.toString())
          this.getUserProfile()
        })
      })
    }
>>>>>>> 6c6cc3632c382633d19d8a69c453b5902670759c
=======
    if(!this.validateInput()) return
    if (this.user.password !=  this.passwordInput.nativeElement.value){
      this.alert.setAlert('⚠️ Atenção!', 'As senhas não correspodem.', 'agora', 3000)
      this.getUserProfile()
      this.passwordInput.nativeElement.value = ''
    } else{
      this.authUserService.putUser(this.user, +(localStorage.getItem("idUser") || "")).subscribe((resp: User) => {
        this.alert.setAlert('🎉 Tudo certo', `Informações atualizadas com sucesso! ${this.user.name}`, 'agora', 3000)
        this.authService.logar(this.user).subscribe((resp: User) => {
          localStorage.setItem("token", resp.token)
          localStorage.setItem("idUser", resp.id.toString())
          localStorage.setItem("idRole", resp.idRole.toString())
          this.getUserProfile()
        })
      })
    }
>>>>>>> 9c683f80a4bd27617cb6ed38478e3159cc0ca1ca
  }
}
