import {Injectable} from '@angular/core';
import {User} from "./user";
import {TIMESTAMPS, TimeStamps} from "./timeStamps";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrlUsers= 'http://localhost:8080/users';
  baseUrlAttendance= 'http://localhost:8080/attendance';

  constructor(public http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrlUsers);
  }

  getUser(id: any): Observable<User> {
    return this.http.get<User>(this.baseUrlUsers + "/id/" + id);
  }

  addUser(user: User) {
    let body = {
      "rfid_uid": user.rfid_uid,
      "name": user.firstName + " " + user.lastName
    }
    return this.http.post<User>(this.baseUrlUsers, body);
  }

  getAttendantTime(id: any): Observable<any> {
      return this.http.get<any>(this.baseUrlAttendance + "/" + id);
  }

  getAttendantList(): Observable<any> {
    return this.http.get<any>(this.baseUrlAttendance);
  }

/*


  getAttendantTime(id: any): TimeStamps[] {
    let timestamp = TIMESTAMPS.filter(elem => elem.userID === id);
    return timestamp;
  }

  */

}
