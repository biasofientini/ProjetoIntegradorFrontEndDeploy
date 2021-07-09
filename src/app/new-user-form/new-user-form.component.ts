import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  user: User = new User()
  roleId: number = 2 //default
  confirmeSenha: string

  constructor(
    private serviceUser: UserService
  ) { }

  ngOnInit(): void {
  }
  confirmarSenha(event: any) {
    this.confirmeSenha = event.target.value
  }

  admin(event: any) {
    this.roleId = Number(event.target.value)

  }
  newUser(){
    if(this.user.password != this.confirmeSenha){
      alert('As senhas digitadas não correspondem.')
    } else {
      this.serviceUser.postUser(this.user, this.roleId).subscribe((resp: User) =>{
        this.user = resp
        this.user = new User()
        if(this.roleId==1){
          alert('Novo administrador cadastrado no sistema!')
        }
        if(this.roleId ==2){
          alert('Novo usuário cadastrado!')
        }
        })
    }
  }
}
