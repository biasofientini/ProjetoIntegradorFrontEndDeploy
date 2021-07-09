import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-new-user',
  templateUrl: './list-new-user.component.html',
  styleUrls: ['./list-new-user.component.css']
})
export class ListNewUserComponent implements OnInit {

  listUsers: User[] = []

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
}
