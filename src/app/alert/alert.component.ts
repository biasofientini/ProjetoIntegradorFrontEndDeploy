import { Component, ElementRef, ViewChild } from '@angular/core';

declare var $: any
declare var bootstrap: any

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent{
  static toast: ElementRef

  @ViewChild('toast') set toastRef (t: ElementRef) {
    AlertComponent.toast = t.nativeElement
  }
  
  static title: string
  static message: string
  static date: string

  constructor(){}

  static setAlert(title: string, message: string, date: string, delay: number = 1500) {
    AlertComponent.title = title
    AlertComponent.message = message
    AlertComponent.date = date
    const toastBootstrap = new bootstrap.Toast(AlertComponent.toast, {
      delay: delay
    })
    toastBootstrap.show()
  }

  get title(){
    return AlertComponent.title
  }

  get message(){
    return AlertComponent.message
  }

  get date(){
    return AlertComponent.date
  }
}
