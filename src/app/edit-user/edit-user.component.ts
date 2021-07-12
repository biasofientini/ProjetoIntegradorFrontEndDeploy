import { Component, Input, OnInit } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = new User()
  alert = AlertComponent

  constructor(
    private serviceUser: UserService
  ) { }

  ngOnInit(): void {
  }

  updateUser() {
    this.serviceUser.putUser(this.user, +(localStorage.getItem("idUser") || "")).subscribe((resp: User) => {
      this.alert.setAlert('🎉 Tudo certo', `Informações atualizadas com sucesso! ${this.user.name}`, 'agora', 3000)
    })
  }

}
