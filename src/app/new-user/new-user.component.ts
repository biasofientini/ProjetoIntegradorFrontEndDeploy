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
  @ViewChild('componentUser') componentUser: ElementRef
  @ViewChild('passwordInput') passwordInput: ElementRef
  @ViewChild('confirmPasswordInput') confirmPasswordInput: ElementRef
  @ViewChild('modalComponentUser') modalComponentUser: ElementRef

  @Input() user: User
  roleId: number = 2 //default
  confirmeSenha: string

  alert = AlertComponent

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  confirmarSenha(event: any) {
    this.confirmeSenha = event.target.value
  }



  showPreviewUser() {
    const modal = new bootstrap.Modal(this.modalComponentUser.nativeElement)
    modal.show()
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id!).subscribe(() => {
      this.alert.setAlert('Remoção', `${this.user.name} removido com sucesso`, 'agora')
      const collapse = new bootstrap.Collapse(
        this.componentUser.nativeElement,
        { toggle: false }
      )
      collapse.hide()
    },
      () => this.alert.setAlert(`Erro`, `Erro ao excluir ${this.user.name}`, 'agora')
    )
  }
}
