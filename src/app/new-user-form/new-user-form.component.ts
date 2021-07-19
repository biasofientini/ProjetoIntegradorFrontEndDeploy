import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {
  @ViewChild('passwordInput') passwordInput: ElementRef
  @ViewChild('checkboxAdmin') checkboxAdmin: ElementRef

  user: User = new User()
  roleId: number = 2 //default
  confirmeSenha: string
  adminCheck: boolean = false
  alert = AlertComponent

  constructor(
    private serviceUser: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  confirmarSenha(event: any) {
    this.confirmeSenha = event.target.value
  }

  adminCheckbox(event: any) {
    if (this.checkboxAdmin.nativeElement.checked == true) {
      this.adminCheck = true
      this.roleId = 1
    }
    if (this.checkboxAdmin.nativeElement.checked == false) {
      this.adminCheck = false
      this.roleId = 2
    }
  }

  cancel() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/admin/usuario/cadastrar']);
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

  admin(event: any) {
    this.roleId = Number(event.target.value)
  }

  newUser() {
    if (!this.validateInput()) return
    if (this.user.password != this.confirmeSenha) {
      this.alert.setAlert('⚠️ Atenção!', 'As senhas não correspodem.', 'agora', 3000)
    } else {
      this.serviceUser.postUser(this.user, this.roleId).subscribe((resp: User) => {
        this.user = resp
        if (this.checkboxAdmin.nativeElement.checked == true) {
          this.alert.setAlert('🎉 Administrador cadastrado', `Sucesso ao cadastrar o administrador ${this.user.name} na Lifeshop!`, 'agora', 3000)
          this.user = new User()
          this.passwordInput.nativeElement.value = ''
          this.checkboxAdmin.nativeElement.checked = false
        } else if (this.checkboxAdmin.nativeElement.checked == false) {
          this.alert.setAlert('🎉 Usuário cadastrado', `Sucesso ao cadastrar o usuário ${this.user.name} na Lifeshop!`, 'agora', 3000)
          this.user = new User()
          this.passwordInput.nativeElement.value = ''
        }
      }, () => this.alert.setAlert(`❌ Erro!`, `O email ${this.user.email}, já está cadastrado em nosso sistema.`, 'agora')
      )
    }
  }
}