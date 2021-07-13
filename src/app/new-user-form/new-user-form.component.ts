import { Component, OnInit } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
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
  alert = AlertComponent

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
      this.alert.setAlert('😁 Sucesso!', `O administrador ${this.user.name} foi cadastrado na Lifeshop!`, 'agora', 3000)
    }
    if(this.roleId ==2){
      this.alert.setAlert('😁 Sucesso!', `O usuário ${this.user.name} foi cadastrado na Lifeshop!`, 'agora', 3000)
    }
    })
  }
}
