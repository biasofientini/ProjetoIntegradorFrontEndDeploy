import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User = new User()

  constructor(
    private authUserService: UserService
  ) { }

  ngOnInit() {
    this.getUserProfile()
  }

  getUserProfile() {
    this.authUserService.getById(Number(localStorage.getItem("idUser") || "")).subscribe((resp: User) => {
      console.log(resp)
      this.user.email = resp.email
      this.user.name = resp.name
      this.user.points = resp.points
      this.user.phone = resp.phone
      this.user.zipCode = resp.zipCode
      this.user.address = resp.address
    })
  }

}
