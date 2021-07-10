import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  newUser() {
    if (this.user.password != this.confirmeSenha) {
      alert('As senhas digitadas não correspondem.')
    } else {
      this.serviceUser.postUser(this.user, this.roleId).subscribe((resp: User) => {
        this.user = resp
        if (this.checkboxAdmin.nativeElement.checked == true) {
          alert('Novo administrador cadastrado no sistema!')
          this.user = new User()
          this.passwordInput.nativeElement.value = ''
        } else if (this.checkboxAdmin.nativeElement.checked == false) {
          alert('Novo usuário cadastrado!')
          this.user = new User()
          this.passwordInput.nativeElement.value = ''
        }

      })
    }
  }
  cancel() {
    this.user = new User()
    this.passwordInput.nativeElement.value = ''
    this.checkboxAdmin.nativeElement.checked = false
    this.roleId=2
  }
}
