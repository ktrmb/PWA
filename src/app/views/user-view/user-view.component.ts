import { Component, OnInit } from '@angular/core';
import {UserService} from "../../users/user.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  displayedColumns: string[] = ['date', 'checkIn', 'checkOut'];
  dataSource: any = [];
  user: any;
  id: any;

  constructor(private users: UserService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const sub = this.route.params.subscribe(params => this.id = +params['id'])
    console.log(this.id);
    console.log(sub);
    this.user = this.users.getUser(this.id);
    const timestamps = this.users.getAttendantTime(this.id);
    timestamps.forEach(elem => {
      this.dataSource.push({
        date: elem.checkIn,
        checkIn: elem.checkIn,
        checkOut: elem.checkOut
      });
    })
    console.log(this.user);
  }

}
