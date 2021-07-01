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

  cadastrar(user: User, idRole: number = 2): Observable<User>{
    return this.http.post<User>(`http://localhost:8080/usuario/role/${idRole}`, user)
  }

  logar(user: User): Observable<any>{
    return this.http.post<User>(`http://localhost:8080/usuario`, {email: user.email, senha: user.senha})
  }
}
