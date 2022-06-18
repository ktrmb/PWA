import {Component, OnChanges, OnInit} from '@angular/core';
import {UserService} from "../../users/user.service";

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnChanges, OnInit {

  userArray: any;

  constructor(private users: UserService) { }

  ngOnInit(): void {
    this.users.getUsers().subscribe(resp => {
      if(resp) {
        this.userArray =  resp;
      }
    });
  }

  ngOnChanges(): void {
    this.users.getUsers().subscribe(resp => {
      if(resp) {
        this.userArray =  resp;
      }
    });
  }

}
