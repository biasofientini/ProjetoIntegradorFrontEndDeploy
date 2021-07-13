import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

declare var bootstrap: any

@Component({
  selector: '[app-new-user]',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @ViewChild('component') component: ElementRef
  @ViewChild('passwordInput') passwordInput: ElementRef
  @ViewChild('confirmPasswordInput') confirmPasswordInput: ElementRef
  @ViewChild('checkboxAdmin') checkboxAdmin: ElementRef
  @ViewChild('modalComponentUser') modalComponentUser: ElementRef
  @ViewChild('modalComponentUpdateUser') modalComponentUpdateUser: ElementRef

  @Input() user: User
  roleId: number = 2 //default
  confirmeSenha: string
  adminCheck: boolean = false
  alert = AlertComponent

  constructor(
    private userService: UserService
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
  showUpdateUser() {
    this.confirmPasswordInput.nativeElement.value = ''
    const modal = new bootstrap.Modal(this.modalComponentUpdateUser.nativeElement)
    modal.show()
  }

  showPreviewUser() {
    const modal = new bootstrap.Modal(this.modalComponentUser.nativeElement)
    modal.show()
  }
  
/*
  updateUser(){
    if (this.user.password != this.confirmeSenha) {
      alert('As senhas digitadas não correspondem.')
    } else {
      this.userService.putUser(this.user, this.user.id).subscribe((resp: User) =>{
        this.user = resp
        alert('Alterações realizadas com sucesso!')
      })
    }
  }
  */

  deleteUser() {
    this.userService.deleteUser(this.user.id!).subscribe(() => {
      this.alert.setAlert('Remoção', `${this.user.name} removido com sucesso`, 'agora')
      const collapse = new bootstrap.Collapse(
        this.component.nativeElement,
        { toggle: false }
      )
      collapse.hide()
    },
      () => this.alert.setAlert(`Erro`, `Erro ao excluir ${this.user.name}`, 'agora')
    )

  }
}
