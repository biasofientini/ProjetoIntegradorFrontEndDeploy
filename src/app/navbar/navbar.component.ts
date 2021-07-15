import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
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
  static searchObs = new Subject<string>()
  static search: string = ''
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
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home']);
  }
  
  f(x?: any) {
    if (x.key == 'Enter') {
      NavbarComponent.search = this.searchComponent.nativeElement.value
      let navigationExtras: NavigationExtras = { state: { example: NavbarComponent.search} };
      NavbarComponent.searchObs.next(this.searchComponent.nativeElement.value)
      this.router.navigate(['/search'], navigationExtras);
    }
  }
}