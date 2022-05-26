import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {User} from "../../users/user";
import {UserService} from "../../users/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  firstName = new FormControl();
  lastName = new FormControl();
  id = new FormControl();

  constructor(private users: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addNew(): void {

    let user: User = {
      id: "",
      rfid_uid: this.id.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      checkIn: undefined,
      checkOut: undefined,
      attendant: false
    }
    this.users.addUser(user).subscribe(resp => {
      this._snackBar.open("Neuer User wurde erstellt", "Close");
      this.firstName.reset();
      this.lastName.reset();
      this.id.reset();
    });

  }

}
