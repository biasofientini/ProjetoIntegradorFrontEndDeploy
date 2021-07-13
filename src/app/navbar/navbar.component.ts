import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchComponent') searchComponent: ElementRef

  user: User = new User
  autenticado = false
  search: string
  admin: boolean = false


  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if ((localStorage.getItem('token') || "") != '') {
      this.autenticado = true
    }
    if ((localStorage.getItem("idRole") || "") == "1") {
      this.admin = true
    }
  }


  logar() {
    this.authService.logar(this.user).subscribe((resp: User) => {
      localStorage.setItem("token", resp.token)
      this.autenticado = true
    })
  }

  signout() {
    localStorage.clear()
    window.location.reload()
  }
  //lógica para fazer o search
  f(x?: any) {
    console.log(x)
    if (x.key == 'Enter') {
      this.search = this.searchComponent.nativeElement.value
      let navigationExtras: NavigationExtras = { state: { example: this.search } };
      this.router.navigate(['/search'], navigationExtras);
      console.log(this.search)
      if (this.router.url == '/search') {
        console.log('chegou aqui')
        console.log(this.search)
        this.router.navigate(['/search'], navigationExtras);
        this.f(this.search) //recursão
        
      }
      //this.router.navigate(['/search'])
      //console.log('enter')*/
    }
  }
}