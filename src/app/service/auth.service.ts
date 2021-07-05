import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(user: User, id: number = 2): Observable<User>{
    return this.http.post<User>(`http://localhost:8080/user/role/${id}`, user)
  }
  logar(user: User): Observable<any>{
    return this.http.post<User>(`http://localhost:8080/user`, {email: user.email, password: user.password})
  }
}