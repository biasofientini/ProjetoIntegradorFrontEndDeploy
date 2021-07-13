import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
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
    private serviceUser: UserService
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
    window.location.reload()
  }

  validateInput() {
    if (this.user.name === undefined || this.user.name === '') {
      this.alert.setAlert('Dados inválidos', 'Insira um nome válido', 'agora')
      return false
    }
    if (this.user.email === undefined || this.user.email === '') {
      //FAZER VALIDAÇÃO DE EMAIL
      this.alert.setAlert('Dados inválidos', 'Insira um email válido', 'agora')
      return false
    }
    if (this.user.zipCode === undefined || this.user.zipCode === '' || this.user.zipCode.length !== 8) {
      this.alert.setAlert('Cpf inválido', 'Insira somente números', 'agora')
      return false
    }
    if (this.user.phone === undefined || this.user.phone === '' || this.user.phone.length < 10 || this.user.phone.length > 11) {
      this.alert.setAlert('Dados inválidos', 'Insira um telefone válido', 'agora')
      return false
    }
    if (this.user.address === undefined || this.user.address === '') {
      this.alert.setAlert('Dados inválidos', 'Insira um endereço válido', 'agora')
      return false
    }
    if (this.user.password === undefined || this.user.password === '' || this.user.password.length < 8) {
      this.alert.setAlert('Senha inválida', 'Insira uma senha com no mínimo 8 caracteres', 'agora')
      return false
    }
    return true
  }

  admin(event: any) {
    this.roleId = Number(event.target.value)
  }
  
  newUser(){
    this.serviceUser.postUser(this.user, this.roleId).subscribe((resp: User) =>{
    this.user = resp
    this.user = new User()
    if(this.roleId==1){
      this.alert.setAlert('😁 Sucesso!', `O administrador ${this.user.name} foi cadastrado na Lifeshop!`, 'agora', 3000)
    }
    if(this.roleId ==2){
      this.alert.setAlert('😁 Sucesso!', `O usuário ${this.user.name} foi cadastrado na Lifeshop!`, 'agora', 3000)
      }
    })
  }

}