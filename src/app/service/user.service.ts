import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${URL}/user/u/${id}`, this.token)
  }

  adminGetById(id: number): Observable<User>{
    return this.http.get<User>(`${URL}/user/${id}`, this.token)
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${URL}/user`, this.token)
  }

  postUser(user: User, id: number): Observable<User> {
    return this.http.post<User>(`${URL}/user/role/${id}`, user)
  }

  putUser(user: User): Observable<User> {
    return this.http.put<User>(`${URL}/user/${user.id}`, user, this.token)
  }

  deleteUser(id: number) :Observable<any>{
    console.log(id)
    return this.http.delete<User>(`${URL}/user/${id}`, this.token)
  }
}
