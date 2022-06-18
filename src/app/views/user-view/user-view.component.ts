import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../users/user.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import {MatTable} from "@angular/material/table";
import {User} from "../../users/user";

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
  timestamps: any;
  spinning: boolean = false;

  @ViewChild(MatTable) table: MatTable<User> | undefined;


  constructor(private users: UserService, private route: ActivatedRoute,) { }

  ngOnInit(): void {

    const sub = this.route.params.subscribe(params => {
      this.id = +params['id'],
        this.users.getUser(this.id).subscribe(resp => {
          if (resp) {
            this.dataSource = [];
            this.user = resp;
            this.getAttendance();
          }
        });
    })

  }


  getAttendance(): void {
    this.users.getAttendantList().subscribe(resp => {
      if (resp) {
        this.timestamps = resp.filter((entry: any) => entry.user_id == this.id).sort().reverse();
      }
      this.timestamps.forEach((elem: any) => {
        if (elem.clockinout == 1 ) {
          this.dataSource.push({
            date: elem.clockin,
            checkIn: elem.clockin,
            checkOut: null
          });
        } else {
          this.dataSource.push({
            date: elem.clockin,
            checkIn: null,
            checkOut: elem.clockin
          });
        }

      });
      hideSpinner();
      this.spinning = true;
      this.table?.renderRows();
    });

    function hideSpinner() {
      // @ts-ignore
      document.getElementById('spinner').style.display = 'none'

    }
  }
}
