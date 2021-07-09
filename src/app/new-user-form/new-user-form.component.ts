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

  constructor(
    private serviceUser: UserService
  ) { }

  ngOnInit(): void {
  }
  confirmarSenha(event: any) {

  }

  admin(event: any) {
    this.roleId = Number(event.target.value)

  }
  newUser(){
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
