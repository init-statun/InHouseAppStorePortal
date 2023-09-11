import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-starter',
  templateUrl: './app-starter.component.html',
  styleUrls: ['./app-starter.component.scss']
})
export class AppStarterComponent implements OnInit {



  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
    console.log()
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
  //     data: {
  //       message: 'Are you sure want to delete?',
  //       buttonText: {
  //         ok: 'Save',
  //         cancel: 'No'
  //       }
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe((confirmed: boolean) => {
  //     if (confirmed) {
  //       alert("closed")
  //     }
  //   });
  // }
}
