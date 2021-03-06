import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  tipoTemplate: number
  admin: boolean = false
  
  constructor() { }

  ngOnInit(): void {
    if ((localStorage.getItem("idRole") || "") == "1") {
      this.admin = true
    }
  }

}
