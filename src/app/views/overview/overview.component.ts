import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../users/user.service";
import {DatePipe} from "@angular/common";
import {User} from "../../users/user";
import {Observable, timeout} from "rxjs";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


  displayedColumns: string[] = ['firstName', 'lastName', 'checkIn', 'checkOut', 'attendant'];
  dataSource:any = [];
  name: string | undefined;
  expand: boolean = false;
  attendance: any;
  spinning: boolean = false;

  @ViewChild(MatTable) table: MatTable<User> | undefined;

  constructor(private users: UserService, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.mapUsers();

  }

  mapUsers(): any {
    this.users.getAttendantList().subscribe(resp => {
      this.attendance = resp;
    });
    this.users.getUsers().subscribe(resp => {
      resp.forEach((user: any) => {
        let name = user.name.split(" ");
        let timestamps = null;
        try {
          timestamps = this.attendance.filter((entry: any) => entry.user_id == user.id);
        } catch (e) {
        }
        try {
          if(timestamps.length > 0) {
            let elem = {
              firstName: name[0],
              lastName: name[1],
              checkIn: null,
              checkOut: null,
              attendant: false
            }

            if(timestamps[timestamps.length -1].clockinout == 1) {
              elem.checkOut = timestamps[timestamps.length - 1].clockin
              elem.checkIn = timestamps[timestamps.length - 2].clockin;
            } else {
              elem.checkIn = timestamps[timestamps.length - 1].clockin;
              elem.attendant = true;
            }
            this.dataSource.push(elem);
          }
        } catch (e) {
          window.location.reload();
        }



      })
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
