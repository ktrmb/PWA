import { Component, OnInit } from '@angular/core';
import {UserService} from "../../users/user.service";

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {

  userArray: any;

  constructor(private users: UserService) { }

  ngOnInit(): void {
    this.userArray = this.users.getUsers();
  }

}
