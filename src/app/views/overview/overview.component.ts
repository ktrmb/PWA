import { Component, OnInit } from '@angular/core';
import {UserService} from "../../users/user.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'checkIn', 'checkOut', 'attendant'];
  dataSource: any;
  name: string | undefined;
  expand: boolean = false;

  constructor(private users: UserService) { }

  ngOnInit(): void {
    this.dataSource = this.users.getUsers();
    this.name = this.users.getUsers()[0].firstName;
  }

}
