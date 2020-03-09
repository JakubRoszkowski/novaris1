import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  apiURL = 'http://localhost:8080/user';

  getUsers() {
    return this.http.get<User[]>(this.apiURL);
  }

  getUser(userID: string) {
    return this.http.get(this.apiURL + '/' + userID);
  }

  addUser() {

  }

  putUser(userID: string, userData) {
    return this.http.put(this.apiURL + '/' + userID, userData);
  }

  deleteUser(userID: string) {
    return this.http.delete(this.apiURL + '/' + userID);
  }
}

