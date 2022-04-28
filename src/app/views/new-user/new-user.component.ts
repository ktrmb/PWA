import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {User} from "../../users/user";
import {UserService} from "../../users/user.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  firstName = new FormControl();
  lastName = new FormControl();
  id = new FormControl();

  constructor(private users: UserService) { }

  ngOnInit(): void {
  }

  addNew(): void {
    console.log(this.firstName.value);
    let user: User = {
      id: this.id.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      checkIn: undefined,
      checkOut: undefined,
      attendant: false
    }
    this.users.addUser(user);
  }

}
