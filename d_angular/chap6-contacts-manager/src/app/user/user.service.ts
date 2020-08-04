import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) { 
  }

  getUser(id: number, callback) {
    this.http.get(`/api/users/${id}`).pipe().subscribe(callback);
  }

  // findUser(no: number) {
  //   const url = `userUrl/${no}`;
  //   return this.http.post(url, { headers: this.headerInfo }).pipe(map(res => res.json()));
  // }


  addUser(user: any, callback) {
    console.log('??');
    
    return this.http.post(`api/vi/users`, user).pipe().subscribe(callback);
  }

  modifyUser(user: any, callback) {
    return this.http.put(`/api/users/${user.id}`,user).pipe().subscribe(callback);
  }

  removeUser(user: any, callback) {
    this.http.delete(`/api/users/${user.id}`).subscribe(callback);
  }

}
