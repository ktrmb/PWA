import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {UserService} from "../../users/user.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  user: any

  constructor( public dialogRef: MatDialogRef<DialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar,
               private route: Router, private users: UserService) { }

  ngOnInit(): void {
    this.user = this.data
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.users.deleteUser(this.user.id).subscribe( resp => {
      this._snackBar.open("User wurde gelöscht", "Close", {
        duration: 60000
      });
      this.route.navigate(['/overview']);

    })
    this.dialogRef.close();
  }

}
