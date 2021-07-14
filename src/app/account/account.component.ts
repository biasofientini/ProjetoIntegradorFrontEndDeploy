import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { User } from '../model/User';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User = new User()
  alert = AlertComponent

  constructor(
    private router: Router,
    private authUserService: UserService
  ) { }

  ngOnInit() {
    this.getUserProfile()
  }

  getUserProfile() {
    this.authUserService.getById(Number(localStorage.getItem("idUser") || "")).subscribe((resp: User) => {
      this.user.email = resp.email
      this.user.name = resp.name
      this.user.points = resp.points
      this.user.phone = resp.phone
      this.user.zipCode = resp.zipCode
      this.user.address = resp.address

      
    })
  }
  updateUser() {
    this.authUserService.putUser(this.user, +(localStorage.getItem("idUser") || "")).subscribe((resp: User) => {
      if(this.user.password != resp.password){
        this.alert.setAlert('🎉 Tudo certo', `Informações atualizadas com sucesso! ${this.user.name}`, 'agora', 3000)
        localStorage.setItem("token", resp.token)
        localStorage.setItem("idUser", resp.id.toString())
        localStorage.setItem("idRole", resp.idRole.toString())
        window.location.reload()
      } else{
        this.alert.setAlert('🎉 Tudo certo', `Informações atualizadas com sucesso! ${this.user.name}`, 'agora', 3000)
      }

    })
  }
}
