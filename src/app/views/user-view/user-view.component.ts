import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../users/user.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import {MatTable} from "@angular/material/table";
import {User} from "../../users/user";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../uiElements/dialog/dialog.component";

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


  constructor(private users: UserService, private route: ActivatedRoute,public dialog: MatDialog) { }

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
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent,{width: '250px', data: this.user});
  }

  getAttendance(): void {
    this.users.getAttendantList().subscribe(resp => {
      if (resp) {
        this.timestamps = resp.filter((entry: any) => entry.user_id == this.id).sort().reverse();
      }
      this.timestamps.forEach((elem: any) => {
        if (elem.clockinout == 0 ) {
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
