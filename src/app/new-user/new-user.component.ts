import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/User';


@Component({
  selector: '[app-new-user]',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @ViewChild('component') component: ElementRef

  @Input() user: User

  constructor() { }

  ngOnInit(): void {
  }

  showUpdateUser(){

  }

  showPreviewUser(){

  }

  deleteUser(){

  }
}
