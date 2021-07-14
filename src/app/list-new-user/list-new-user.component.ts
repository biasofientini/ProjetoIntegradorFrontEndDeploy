import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-new-user',
  templateUrl: './list-new-user.component.html',
  styleUrls: ['./list-new-user.component.css']
})
export class ListNewUserComponent implements OnInit {


  listUsers: User[] = []
  user: User = new User
  alert = AlertComponent

  constructor(
    private serviceUser: UserService
  ) { }

  ngOnInit(){
    this.findAllUsers()
  }

  findAllUsers(){
    this.serviceUser.getAllUsers().subscribe((resp: User[]) =>{
      this.listUsers = resp
    })
  }
  findUsersByName(){
    if(this.user.name === undefined){
      this.findAllUsers()
    } else {
      this.serviceUser.getUsersByName(this.user.name).subscribe((resp: User[]) =>{
        this.listUsers = resp
        if(this.listUsers.length==0){
          this.alert.setAlert(`Usuário não localizado`, ` Erro ao buscar por ${this.user.name}, não há usuários cadastrados com esse nome.`, 'agora')
        }
      })
    }
  }
}
