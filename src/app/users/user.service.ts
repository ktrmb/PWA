import {Injectable} from '@angular/core';
import {User} from "./user";
import {USERS} from "./mock-users";
import {TIMESTAMPS, TimeStamps} from "./timeStamps";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }

  getUser(id: any): User {
    return USERS.filter(elem => elem.id == id)[0];
  }

  addUser(user: User) {
    USERS.push(user);
  }


  getAttendantTime(id: any): TimeStamps[] {
    let timestamp = TIMESTAMPS.filter(elem => elem.userID === id);
    return timestamp;
  }

}
